'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Bot,
  User,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  buttons?: ActionButton[];
}

interface ActionButton {
  label: string;
  url: string;
  icon?: string;
}

const MAX_MESSAGES = 15;
const STORAGE_KEY = 'creatorit_chat_history';

export function ChatWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHelpBubble, setShowHelpBubble] = useState(true);
  const [showConsent, setShowConsent] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load chat history from sessionStorage
  useEffect(() => {
    const savedMessages = sessionStorage.getItem(STORAGE_KEY);
    const savedConsent = sessionStorage.getItem('creatorit_chat_consent');

    if (savedConsent === 'true') {
      setHasConsent(true);
    }

    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed);
      } catch (error) {
        console.error('Error loading chat history:', error);
        // Initialize with welcome message
        setMessages([
          {
            role: 'assistant',
            content:
              "Hi! 👋 I'm here to help you learn about CreatorIT's services. Ask me anything about web development, digital marketing, or our ready-to-deploy ERP systems!",
          },
        ]);
      }
    } else {
      // Initialize with welcome message
      setMessages([
        {
          role: 'assistant',
          content:
            "Hi! 👋 I'm here to help you learn about CreatorIT's services. Ask me anything about web development, digital marketing, or our ready-to-deploy ERP systems!",
        },
      ]);
    }
  }, []);

  // Save chat history to sessionStorage (with limit)
  useEffect(() => {
    if (messages.length > 0) {
      // Keep only last MAX_MESSAGES
      const limitedMessages = messages.slice(-MAX_MESSAGES);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(limitedMessages));

      // Update messages if we trimmed
      if (limitedMessages.length < messages.length) {
        setMessages(limitedMessages);
      }
    }
  }, [messages]);

  // Auto-hide help bubble after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelpBubble(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (accepted: boolean) => {
    if (accepted) {
      setHasConsent(true);
      sessionStorage.setItem('creatorit_chat_consent', 'true');
    }
    setShowConsent(false);
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowHelpBubble(false);

    // Show consent dialog if not already given
    if (!hasConsent) {
      setShowConsent(true);
    }
  };

  const generateActionButtons = (
    userMessage: string,
    botResponse: string
  ): ActionButton[] => {
    const buttons: ActionButton[] = [];
    const message = userMessage.toLowerCase();
    const response = botResponse.toLowerCase();

    // Contact-related keywords
    if (
      message.includes('contact') ||
      message.includes('reach') ||
      message.includes('get in touch')
    ) {
      buttons.push({ label: '📝 Contact Form', url: '/contact', icon: '📝' });
      return buttons;
    }

    // Services keywords
    if (
      message.includes('service') ||
      message.includes('what do you do') ||
      message.includes('offer')
    ) {
      buttons.push({
        label: '🌐 Web Development',
        url: '/web-services',
        icon: '🌐',
      });
      buttons.push({
        label: '📱 Digital Marketing',
        url: '/digital-marketing',
        icon: '📱',
      });
      buttons.push({
        label: '⚙️ CMS Development',
        url: '/cms-development',
        icon: '⚙️',
      });
      return buttons.slice(0, 3);
    }

    // Web development
    if (
      message.includes('web') ||
      message.includes('website') ||
      message.includes('development')
    ) {
      buttons.push({
        label: '🌐 Web Services',
        url: '/web-services',
        icon: '🌐',
      });
      buttons.push({ label: '📝 Contact Us', url: '/contact', icon: '📝' });
      return buttons;
    }

    // Digital Marketing
    if (
      message.includes('marketing') ||
      message.includes('seo') ||
      message.includes('sem') ||
      message.includes('social media')
    ) {
      buttons.push({
        label: '📱 Digital Marketing',
        url: '/digital-marketing',
        icon: '📱',
      });
      buttons.push({ label: '📝 Get Quote', url: '/contact', icon: '📝' });
      return buttons;
    }

    // Email Marketing
    if (message.includes('email marketing')) {
      buttons.push({
        label: '✉️ Email Marketing',
        url: '/services/email-marketing',
        icon: '✉️',
      });
      buttons.push({ label: '📝 Contact Us', url: '/contact', icon: '📝' });
      return buttons;
    }

    // CMS
    if (
      message.includes('cms') ||
      message.includes('wordpress') ||
      message.includes('joomla') ||
      message.includes('drupal')
    ) {
      buttons.push({
        label: '⚙️ CMS Development',
        url: '/cms-development',
        icon: '⚙️',
      });
      buttons.push({ label: '📝 Contact Us', url: '/contact', icon: '📝' });
      return buttons;
    }

    // Software/ERP
    if (
      message.includes('software') ||
      message.includes('erp') ||
      message.includes('management system') ||
      message.includes('crm')
    ) {
      buttons.push({
        label: '💻 Software Development',
        url: '/software-development',
        icon: '💻',
      });
      buttons.push({ label: '📝 Get Started', url: '/contact', icon: '📝' });
      return buttons;
    }

    // Pricing
    if (
      message.includes('price') ||
      message.includes('cost') ||
      message.includes('budget') ||
      message.includes('quote')
    ) {
      buttons.push({ label: '📝 Request Quote', url: '/contact', icon: '📝' });
      return buttons;
    }

    // About/Company
    if (
      message.includes('about') ||
      message.includes('company') ||
      message.includes('who are you')
    ) {
      buttons.push({ label: 'ℹ️ About Us', url: '/about', icon: 'ℹ️' });
      buttons.push({ label: '📝 Contact Us', url: '/contact', icon: '📝' });
      return buttons;
    }

    // Default: if response mentions services, show service buttons
    if (
      response.includes('service') ||
      response.includes('development') ||
      response.includes('marketing')
    ) {
      buttons.push({ label: '🌐 View Services', url: '/services', icon: '🌐' });
      buttons.push({ label: '📝 Contact Us', url: '/contact', icon: '📝' });
      return buttons;
    }

    return buttons;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      // Generate or get session ID
      let sessionId = sessionStorage.getItem('creatorit_session_id');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('creatorit_session_id', sessionId);
      }

      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory,
          sessionId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botMessage = data.message;
        const actionButtons = generateActionButtons(userMessage, botMessage);

        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: botMessage,
            buttons: actionButtons.length > 0 ? actionButtons : undefined,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again.',
          },
        ]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  return (
    <>
      {/* Consent Dialog */}
      <AnimatePresence>
        {showConsent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowConsent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    Chat with CreatorIT Assistant
                  </h3>
                  <p className="text-sm text-gray-600">
                    We'd like to save our conversation to provide you with a
                    better experience. Your chat history will be stored
                    temporarily during your browsing session and automatically
                    deleted when you close your browser.
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    By continuing, you agree to our privacy practices.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleConsent(false)}
                  className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Decline
                </button>
                <button
                  onClick={() => handleConsent(true)}
                  className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-medium text-white transition-all hover:shadow-lg"
                >
                  Accept & Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Help Bubble */}
      <AnimatePresence>
        {!isOpen && showHelpBubble && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-28 right-6 z-40"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-white shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <p className="text-sm font-medium">Need Help? Ask me!</p>
                <button
                  onClick={() => setShowHelpBubble(false)}
                  className="ml-2 rounded-full p-1 transition-colors hover:bg-white/20"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 transform bg-gradient-to-br from-purple-600 to-blue-600"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dancing Robot Chat Button */}
      <motion.div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={handleOpenChat}
          className="relative rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_100%] p-5 text-white shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{
            scale: { type: 'spring', stiffness: 260, damping: 20 },
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              y: [0, -5, 0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-7 w-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bot className="h-7 w-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-white"
              />
            </motion.div>
          )}
        </motion.button>

        {!isOpen && (
          <>
            <motion.div
              className="absolute right-0 top-0 text-yellow-400"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 text-yellow-400"
              animate={{
                scale: [0, 1, 0],
                rotate: [360, 180, 0],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-6 z-50 flex h-[600px] w-[400px] flex-col overflow-hidden rounded-2xl border-2 border-purple-200 bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_100%] p-4 text-white">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm"
                animate={{
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Bot className="h-7 w-7" />
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  className="text-lg font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  CreatorIT Assistant
                </motion.h3>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <p className="text-xs text-white/90">Online 24/7</p>
                </motion.div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <motion.div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Bot className="h-5 w-5 text-white" />
                    </motion.div>
                  )}
                  <div className="flex max-w-[75%] flex-col gap-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-2xl p-3 shadow-md ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'border border-gray-100 bg-white text-gray-800'
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </p>
                    </motion.div>

                    {/* Action Buttons */}
                    {message.buttons && message.buttons.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {message.buttons.map((button, btnIndex) => (
                          <motion.button
                            key={btnIndex}
                            onClick={() => handleButtonClick(button.url)}
                            className="flex items-center justify-between gap-2 rounded-lg border-2 border-purple-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-purple-400 hover:bg-purple-50"
                            whileHover={{ scale: 1.03, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{button.label}</span>
                            <ExternalLink className="h-4 w-4 text-purple-600" />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.role === 'user' && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gray-400 to-gray-500 shadow-lg">
                      <User className="h-5 w-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start gap-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-md">
                    <div className="flex gap-1">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-purple-600"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-blue-600"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-purple-600"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t-2 border-gray-100 bg-white p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 rounded-full border-2 border-gray-200 px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Search,
  LogOut,
  Loader2,
  Calendar,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ChatConversation {
  id: number;
  session_id: string;
  user_message: string;
  bot_response: string;
  keywords: string[];
  action_taken: string | null;
  user_ip: string;
  user_agent: string;
  is_resolved: boolean;
  admin_notes: string | null;
  created_at: string;
}

interface Analytics {
  date: string;
  total_messages: number;
  unique_sessions: number;
  actions_taken: number;
}

export default function AdminChatsPage() {
  const router = useRouter();
  const [chats, setChats] = useState<ChatConversation[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchSession, setSearchSession] = useState('');
  const [filterResolved, setFilterResolved] = useState<boolean | null>(null);
  const [expandedChat, setExpandedChat] = useState<number | null>(null);

  useEffect(() => {
    fetchChats();
    fetchAnalytics();
  }, [page, searchSession, filterResolved]);

  const fetchChats = async () => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        ...(searchSession && { sessionId: searchSession }),
        ...(filterResolved !== null && { isResolved: filterResolved.toString() }),
      });

      const response = await fetch(`/api/admin/chats?${params}`);

      if (response.status === 401) {
        router.push('/admin');
        return;
      }

      const data = await response.json();
      if (data.success) {
        setChats(data.chats);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.error('Failed to fetch chats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/admin/chats/analytics');
      const data = await response.json();
      if (data.success) {
        setAnalytics(data.analytics);
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  const toggleResolved = async (id: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/chats/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isResolved: !currentStatus }),
      });

      if (response.ok) {
        fetchChats();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  const totalMessages = analytics.reduce((sum, day) => sum + day.total_messages, 0);
  const totalSessions = analytics.reduce((sum, day) => sum + day.unique_sessions, 0);
  const totalActions = analytics.reduce((sum, day) => sum + day.actions_taken, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Chat Analytics</h1>
              <p className="text-sm text-gray-600">CreatorIT Chatbot Conversations</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Contact Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm font-medium">Total Messages</h3>
                <p className="text-3xl font-bold text-gray-900">{totalMessages}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm font-medium">Unique Sessions</h3>
                <p className="text-3xl font-bold text-gray-900">{totalSessions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm font-medium">Actions Taken</h3>
                <p className="text-3xl font-bold text-gray-900">{totalActions}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchSession}
                onChange={(e) => setSearchSession(e.target.value)}
                placeholder="Search by session ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterResolved(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterResolved === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterResolved(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterResolved === false
                    ? 'bg-yellow-600 text-white'
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterResolved(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterResolved === true
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                Resolved
              </button>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="space-y-4">
          {chats.map((chat) => (
            <ChatCard
              key={chat.id}
              chat={chat}
              isExpanded={expandedChat === chat.id}
              onToggleExpand={() =>
                setExpandedChat(expandedChat === chat.id ? null : chat.id)
              }
              onToggleResolved={toggleResolved}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatCard({
  chat,
  isExpanded,
  onToggleExpand,
  onToggleResolved,
}: {
  chat: ChatConversation;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onToggleResolved: (id: number, currentStatus: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-mono text-gray-600">
                Session: {chat.session_id.substring(0, 20)}...
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  chat.is_resolved
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {chat.is_resolved ? 'Resolved' : 'Pending'}
              </span>
            </div>
            <p className="text-sm text-gray-700 font-semibold mb-2">
              User: {chat.user_message}
            </p>
            {chat.keywords && chat.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {chat.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(chat.created_at).toLocaleString()}
              </span>
              <span>IP: {chat.user_ip}</span>
            </div>
          </div>
          <button
            onClick={onToggleExpand}
            className="text-purple-600 hover:text-purple-700"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">User Message:</p>
              <p className="text-sm text-blue-800">{chat.user_message}</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-purple-900 mb-2">Bot Response:</p>
              <p className="text-sm text-purple-800 whitespace-pre-wrap">
                {chat.bot_response}
              </p>
            </div>

            {chat.action_taken && (
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-green-900 mb-2">Action Taken:</p>
                <p className="text-sm text-green-800">{chat.action_taken}</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => onToggleResolved(chat.id, chat.is_resolved)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  chat.is_resolved
                    ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
                    : 'bg-green-100 hover:bg-green-200 text-green-800'
                }`}
              >
                {chat.is_resolved ? 'Mark as Pending' : 'Mark as Resolved'}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
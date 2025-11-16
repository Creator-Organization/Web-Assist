'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Calendar,
  Search,
  LogOut,
  Loader2,
  MessageSquare,
  Building,
  CheckCircle,
  X,
} from 'lucide-react';
import { DatabaseContact } from '@/types/contact';

export default function AdminDashboard() {
  const router = useRouter();
  const [contacts, setContacts] = useState<DatabaseContact[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchContacts();
    fetchStats();
  }, [filter, searchTerm, page]);

  const fetchContacts = async () => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        status: filter,
        search: searchTerm,
      });

      const response = await fetch(`/api/admin/contacts?${params}`);

      if (response.status === 401) {
        router.push('/admin');
        return;
      }

      const data = await response.json();
      if (data.success) {
        setContacts(data.contacts);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setPage(1);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchTerm('');
    setPage(1);
  };

  const applyFilter = (newFilter: string) => {
    setFilter(newFilter);
    setPage(1);
  };

  const clearFilter = () => {
    setFilter('all');
    setPage(1);
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchContacts();
        fetchStats();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  const getStatusColor = (status: string) => {
    const colors: any = {
      new: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      replied: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
      spam: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                CreatorIT Contact Management
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin/chats')}
                className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
              >
                <MessageSquare className="h-4 w-4" />
                Chat Analytics
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {stats && (
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-5">
            <StatCard title="Total" value={stats.total} color="blue" />
            <StatCard title="New" value={stats.new} color="blue" />
            <StatCard
              title="In Progress"
              value={stats.inProgress}
              color="yellow"
            />
            <StatCard title="Replied" value={stats.replied} color="green" />
            <StatCard title="Closed" value={stats.closed} color="gray" />
          </div>
        )}

        <div className="mb-6 rounded-lg bg-white p-4 shadow">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder="Search by name, email, or company..."
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                onClick={handleSearch}
                className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => applyFilter('all')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => applyFilter('new')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'new'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                New
              </button>
              <button
                onClick={() => applyFilter('in_progress')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'in_progress'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => applyFilter('replied')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'replied'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                Replied
              </button>
              <button
                onClick={() => applyFilter('closed')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'closed'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Closed
              </button>
              <button
                onClick={() => applyFilter('spam')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'spam'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-800 hover:bg-red-200'
                }`}
              >
                Spam
              </button>
              {filter !== 'all' && (
                <button
                  onClick={clearFilter}
                  className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300"
                >
                  <X className="h-4 w-4" />
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onStatusChange={updateStatus}
              getStatusColor={getStatusColor}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: any) {
  const colors: any = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    gray: 'bg-gray-500',
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div
        className={`h-12 w-12 ${colors[color]} mb-4 flex items-center justify-center rounded-lg`}
      >
        <Mail className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function ContactCard({ contact, onStatusChange, getStatusColor }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const quickReplyTemplates = [
    { value: 'understanding', label: '✅ Understanding Request' },
    { value: 'accepted', label: '🎉 Request Accepted' },
    { value: 'in_progress', label: '🚀 Work in Progress' },
    { value: 'almost_done', label: '🎊 Almost Complete' },
    { value: 'will_reach_soon', label: '📞 Will Reach Soon' },
    { value: 'bot_detected', label: '⚠️ Bot/Spam Detected' },
  ];

  const handleQuickReply = async () => {
    if (!selectedTemplate) return;

    setIsSending(true);
    setSendStatus('idle');

    try {
      const response = await fetch('/api/admin/quick-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactId: contact.id,
          templateType: selectedTemplate,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSendStatus('success');
        setSelectedTemplate('');
        setTimeout(() => setSendStatus('idle'), 3000);

        // Refresh the contact list
        window.location.reload();
      } else {
        setSendStatus('error');
        setTimeout(() => setSendStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Failed to send quick reply:', error);
      setSendStatus('error');
      setTimeout(() => setSendStatus('idle'), 3000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg bg-white shadow transition-shadow hover:shadow-md"
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {contact.name}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(contact.status)}`}
              >
                {contact.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <p className="mb-1 text-sm font-semibold text-purple-600">
              {contact.subject}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {contact.countryCode} {contact.phone}
              </span>
              {contact.company && (
                <span className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  {contact.company}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(contact.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="mb-4 grid gap-3">
              {contact.serviceInterest && (
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Service Interest:
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {contact.serviceInterest}
                  </span>
                </div>
              )}
              {contact.budgetRange && (
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Budget:
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {contact.budgetRange}
                  </span>
                </div>
              )}
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Message:
                </span>
                <p className="mt-1 whitespace-pre-wrap text-sm text-gray-600">
                  {contact.message}
                </p>
              </div>
              {contact.captchaScore && (
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    CAPTCHA Score:
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {contact.captchaScore.toFixed(2)}/1.00
                  </span>
                </div>
              )}
            </div>

            {/* Status Buttons */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-gray-700">
                Update Status:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onStatusChange(contact.id, 'new')}
                  className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-800 hover:bg-blue-200"
                >
                  New
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'in_progress')}
                  className="rounded bg-yellow-100 px-3 py-1 text-sm text-yellow-800 hover:bg-yellow-200"
                >
                  In Progress
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'replied')}
                  className="rounded bg-green-100 px-3 py-1 text-sm text-green-800 hover:bg-green-200"
                >
                  Replied
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'closed')}
                  className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
                >
                  Closed
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'spam')}
                  className="rounded bg-red-100 px-3 py-1 text-sm text-red-800 hover:bg-red-200"
                >
                  Spam
                </button>
              </div>
            </div>

            {/* Quick Reply Section */}
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
              <p className="mb-3 text-sm font-medium text-purple-900">
                📧 Quick Reply:
              </p>
              <div className="flex gap-2">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  disabled={isSending}
                  className="flex-1 rounded-lg border border-purple-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a template...</option>
                  {quickReplyTemplates.map((template) => (
                    <option key={template.value} value={template.value}>
                      {template.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleQuickReply}
                  disabled={!selectedTemplate || isSending}
                  className={`flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-medium transition-colors ${
                    !selectedTemplate || isSending
                      ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                      : sendStatus === 'success'
                        ? 'bg-green-600 text-white'
                        : sendStatus === 'error'
                          ? 'bg-red-600 text-white'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : sendStatus === 'success' ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Sent!
                    </>
                  ) : sendStatus === 'error' ? (
                    <>
                      <X className="h-4 w-4" />
                      Failed
                    </>
                  ) : (
                    <>
                      <MessageSquare className="h-4 w-4" />
                      Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm font-medium text-purple-600 hover:text-purple-700"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </motion.div>
  );
}

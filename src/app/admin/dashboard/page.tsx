'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, Calendar, Search, 
  LogOut, Loader2, MessageSquare, Building,
  CheckCircle, X
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
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">CreatorIT Contact Management</p>
            </div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <StatCard title="Total" value={stats.total} color="blue" />
            <StatCard title="New" value={stats.new} color="blue" />
            <StatCard title="In Progress" value={stats.inProgress} color="yellow" />
            <StatCard title="Replied" value={stats.replied} color="green" />
            <StatCard title="Closed" value={stats.closed} color="gray" />
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder="Search by name, email, or company..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => applyFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => applyFilter('new')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'new'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                New
              </button>
              <button
                onClick={() => applyFilter('in_progress')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'in_progress'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => applyFilter('replied')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'replied'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                Replied
              </button>
              <button
                onClick={() => applyFilter('closed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'closed'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Closed
              </button>
              <button
                onClick={() => applyFilter('spam')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <X className="w-4 h-4" />
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
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
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

function StatCard({ title, value, color }: any) {
  const colors: any = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    gray: 'bg-gray-500',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className={`w-12 h-12 ${colors[color]} rounded-lg mb-4 flex items-center justify-center`}>
        <Mail className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function ContactCard({ contact, onStatusChange, getStatusColor }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                {contact.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <p className="text-sm font-semibold text-purple-600 mb-1">{contact.subject}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {contact.countryCode} {contact.phone}
              </span>
              {contact.company && (
                <span className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  {contact.company}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(contact.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid gap-3 mb-4">
              {contact.serviceInterest && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Service Interest:</span>
                  <span className="ml-2 text-sm text-gray-600">{contact.serviceInterest}</span>
                </div>
              )}
              {contact.budgetRange && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Budget:</span>
                  <span className="ml-2 text-sm text-gray-600">{contact.budgetRange}</span>
                </div>
              )}
              <div>
                <span className="text-sm font-medium text-gray-700">Message:</span>
                <p className="mt-1 text-sm text-gray-600 whitespace-pre-wrap">{contact.message}</p>
              </div>
              {contact.captchaScore && (
                <div>
                  <span className="text-sm font-medium text-gray-700">CAPTCHA Score:</span>
                  <span className="ml-2 text-sm text-gray-600">{contact.captchaScore.toFixed(2)}/1.00</span>
                </div>
              )}
            </div>

            {/* Status Buttons */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Update Status:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onStatusChange(contact.id, 'new')}
                  className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded text-sm"
                >
                  New
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'in_progress')}
                  className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded text-sm"
                >
                  In Progress
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'replied')}
                  className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-800 rounded text-sm"
                >
                  Replied
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'closed')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded text-sm"
                >
                  Closed
                </button>
                <button
                  onClick={() => onStatusChange(contact.id, 'spam')}
                  className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded text-sm"
                >
                  Spam
                </button>
              </div>
            </div>

            {/* Quick Reply Section */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-medium text-purple-900 mb-3">📧 Quick Reply:</p>
              <div className="flex gap-2">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  disabled={isSending}
                  className="flex-1 px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    !selectedTemplate || isSending
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : sendStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : sendStatus === 'error'
                      ? 'bg-red-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : sendStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Sent!
                    </>
                  ) : sendStatus === 'error' ? (
                    <>
                      <X className="w-4 h-4" />
                      Failed
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
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
          className="mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </motion.div>
  );
}
import { useState } from "react";
const ApplicationsManager = () => {
    const [applications, setApplications] = useState([
      {
        id: 1,
        name: 'John Doe',
        position: 'Frontend Developer',
        email: 'john.doe@example.com',
        status: 'screening',
        date: '2025-04-10',
      },
      {
        id: 2,
        name: 'Sarah Smith',
        position: 'UI/UX Designer',
        email: 'sarah.smith@example.com',
        status: 'interview',
        date: '2025-04-08',
      },
      {
        id: 3,
        name: 'Michael Brown',
        position: 'Backend Developer',
        email: 'michael.brown@example.com',
        status: 'applied',
        date: '2025-04-12',
      },
      {
        id: 4,
        name: 'Emily Johnson',
        position: 'Product Manager',
        email: 'emily.johnson@example.com',
        status: 'technical',
        date: '2025-04-05',
      },
      {
        id: 5,
        name: 'Robert Wilson',
        position: 'DevOps Engineer',
        email: 'robert.wilson@example.com',
        status: 'offer',
        date: '2025-04-01',
      }
    ]);
    
    const [filterStatus, setFilterStatus] = useState('all');
    
    const handleStatusChange = (id, newStatus) => {
      setApplications(applications.map(app => 
        app.id === id ? {...app, status: newStatus} : app
      ));
    };
    
    const filteredApplications = filterStatus === 'all' 
      ? applications 
      : applications.filter(app => app.status === filterStatus);
    
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Applications Manager</h2>
          
          <div className="flex items-center space-x-2">
            <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
              Filter by status:
            </label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm py-2 pl-3 pr-10 text-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All</option>
              <option value="applied">Applied</option>
              <option value="screening">Screening</option>
              <option value="interview">Interview</option>
              <option value="technical">Technical Test</option>
              <option value="offer">Offer</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <li key={application.id}>
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">{application.name}</h3>
                      <p className="max-w-2xl text-sm text-gray-500 mt-1">{application.position}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      Applied on: {new Date(application.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500">{application.email}</p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-500">
                        Status:
                        <select
                          value={application.status}
                          onChange={(e) => handleStatusChange(application.id, e.target.value)}
                          className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold 
                            ${getStatusColor(application.status)}`}
                        >
                          <option value="applied">Applied</option>
                          <option value="screening">Screening</option>
                          <option value="interview">Interview</option>
                          <option value="technical">Technical Test</option>
                          <option value="offer">Offer</option>
                          <option value="hired">Hired</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                      
                      <button
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  function getStatusColor(status) {
    switch(status) {
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'screening':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'technical':
        return 'bg-indigo-100 text-indigo-800';
      case 'offer':
        return 'bg-orange-100 text-orange-800';
      case 'hired':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  export default ApplicationsManager;
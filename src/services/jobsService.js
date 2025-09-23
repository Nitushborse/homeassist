import axiosInstance from '../api/axiosInstance';

// =======================
// Client Jobs
// =======================

// Get all jobs posted by current client
export const getClientPostedJobs = async () => {
  const { data } = await axiosInstance.get('/job/getclientjobs');
  return data.data; 
};

export const createNewJob = async (jobData) => {
  const { data } = await axiosInstance.post('/job/postjob', jobData);
  return data.data; 
};

export const getAllRequests = async (jobId) => {
  const {data} = await axiosInstance.get(`/job/getallrequests/${jobId}`)
  return data.data
}

export const acceptJobRequest = async (requestId) => {
  const { data } = await axiosInstance.patch(`/job/acceptjobrequest/${requestId}`);
  return data;
};


// =======================
// Freelancer Jobs
// =======================

// Get all jobs requested by current freelancer
export const getRequestedJobs = async () => {
  const { data } = await axiosInstance.get('/job/getRequestedJobs');
  return data.data; 
};

export const getAvailablejobs = async () => {
  const { data } = await axiosInstance.get('/job/getalljobs');
  return data.data; 
};


export const createRequest = async (jobId) => {
  const { data } = await axiosInstance.post(`job/createjobrequest`, {jobId});
  return data.data; 
};

export const getfulldetails = async (jobId) => {
  const { data } = await axiosInstance.get(`job/getfulldetails/${jobId}`);
  return data.data; 
};







// =======================
// Common Job APIs
// =======================



export const getfulljobdetail = async (jobId) => {
  const { data } = await axiosInstance.get(`job/getjobdetails/${jobId}`);
  return data.data; 
};

export const getJobCategories = async () => {
  const { data } = await axiosInstance.get("/job/getallcategories"); 
  return data.data; 
};

export const markJobComplete = async (jobId) => {
  const {data} = await axiosInstance.patch(`/job/jobcompleted/${jobId}`)
  return data.data
}

export const markJobCancel = async (jobId) => {
  const {data} = await axiosInstance.patch(`/job/canceljob/${jobId}`)
  return data.data
}





// Get single job details (with client + freelancer requests)
// export const getJobDetails = async (jobId) => {
//   const { data } = await axiosInstance.get(`/job/${jobId}`);
//   return data.data; // { job, jobRequests }
// };

// // Create new job (for client)
// export const createJob = async (jobData) => {
//   const { data } = await axiosInstance.post('/job/create', jobData);
//   return data.data;
// };

// // Update job (client only)
// export const updateJob = async (jobId, jobData) => {
//   const { data } = await axiosInstance.put(`/job/${jobId}`, jobData);
//   return data.data;
// };

// // Delete job (client only)
// export const deleteJob = async (jobId) => {
//   const { data } = await axiosInstance.delete(`/job/${jobId}`);
//   return data.data;
// };

// // Send proposal (freelancer)
// export const sendProposal = async (jobId, proposalData) => {
//   const { data } = await axiosInstance.post(`/job/${jobId}/request`, proposalData);
//   return data.data;
// };

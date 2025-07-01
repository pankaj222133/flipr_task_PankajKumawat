import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getProjects = async () => {
  const res = await axios.get(`${API_BASE}/projects`);
  return res.data;
};

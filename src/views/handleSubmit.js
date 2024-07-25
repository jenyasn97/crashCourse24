import router from "@/router";
import axios from "axios";
import { form } from "./AddJobView.vue";

export async function handleSubmit() {
  const newJob = {
    type: form.type,
    title: form.title,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    const response = await axios.post(`/api/jobs`, newJob);
    router.push(`/jobs/${response.data.id}`);
  } catch (err) {
    console.error(`Error fetching job`, err);
  }
}

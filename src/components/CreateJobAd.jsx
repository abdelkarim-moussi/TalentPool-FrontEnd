import { useState } from "react";
const CreateJobAd = () => {
    const [formData, setFormData] = useState({
      title: '',
      department: '',
      location: '',
      type: 'full-time',
      experience: '',
      description: '',
      requirements: '',
      salary: '',
      benefits: '',
      deadline: ''
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    // You'll likely want to return some JSX here with your form
    return (
      <form>
        {/* Example input field */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
        />
        
        {/* Add other form fields similarly */}
        {/* ... */}
      </form>
    );
}

export default CreateJobAd;
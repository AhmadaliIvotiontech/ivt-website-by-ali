import { useState } from "react";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.service.trim()) newErrors.service = "Service is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSubmitted(true);
      console.log("Form Data:", form);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <section className="get_in_touch_section">
      <div className="container pb-5">
        <div className="section-title text-center mb-0 pb-5">
          <h2>Get In Touch</h2>
        </div>
        <div className="row g-4">

          {/* LEFT SIDE */}
          <div className="col-md-4">
            <div className="contact-left p-4 h-100">
              <img src='assets/img/logo.png' className='img-fluid' alt='Ivotiontech Logo' style={{ width: 250, display: 'block', margin: '0 auto 28px' }} />

              <h2 className="mb-4 font-weight-400 mb-3">Contact us</h2>
              <p className="color-groom font-14 mb-4">
                We are committed to processing the information in order to
                contact you and talk about your project.
              </p>

              <div className="mt-0">
                <div className="d-flex mb-4">
                  <i className="bi bi-envelope text-warning me-4"></i>
                  <p className="mb-0">info@ivotiontech.com</p>
                </div>

                <div className="d-flex mb-4">
                  <i className="bi bi-geo-alt text-warning me-4"></i>
                  <p className="mb-0">
                    B-414, Sun West Bank, Opp Vallabh Sadan, Ashram Road,
                    Ahmedabad - 380009 Gujarat, India
                  </p>
                </div>

                <div className="d-flex mb-0">
                  <i className="bi bi-telephone text-warning me-4"></i>
                  <div>
                    <p className="mb-0">+91 972-322-9138</p>
                    <p className="mb-0">+91 942-687-3360</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-8">
            <div className="contact-form p-4 h-100">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="text-muted-new mb-2">Your Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name && "is-invalid"}`}
                      value={form.name}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="text-muted-new mb-2">Your Email <span className="text-danger">*</span></label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email && "is-invalid"}`}
                      value={form.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="text-muted-new mb-2">Subject <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      name="subject"
                      className={`form-control ${errors.subject && "is-invalid"}`}
                      value={form.subject}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.subject}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="text-muted-new mb-2">Service Desired <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      name="service"
                      className={`form-control ${errors.service && "is-invalid"}`}
                      value={form.service}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.service}</div>
                  </div>

                  <div className="col-12">
                    <label className="text-muted-new mb-2">Your Message <span className="text-danger">*</span></label>
                    <textarea
                      name="message"
                      rows={5}
                      className={`form-control ${errors.message && "is-invalid"}`}
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    <div className="invalid-feedback">{errors.message}</div>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button className="btn-get-started yellow mx-auto px-5">
                      Send Email
                    </button>
                  </div>

                  {submitted && (
                    <div className="text-success text-center mt-3">
                      Form submitted successfully!
                    </div>
                  )}

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
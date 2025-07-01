import React,{useState} from 'react';


const HeroSection = () => {
    // State to hold form field values
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [city, setCity] = useState("");

    // State to handle success/error messages
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Prepare data to send to the backend
        const formData = {
            fullName,
            email,
            mobileNumber,
            city,
        };

        try {
            const response = await fetch("http://localhost:5000/api/contact/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({ type: "success", text: "Your form has been submitted successfully!" });
            } else {
                setMessage({ type: "error", text: data.error || "Something went wrong." });
            }
        } catch (error) {
            setMessage({ type: "error", text: "There was an error submitting the form." });
        }

        setLoading(false); // Stop loading
    };

    return (
        <div className="hero-section">
            {/* Top Section */}
            <div className="top-section">
                <div className="text-content">
                    <h1>Consultation, <br /> Design,  <br />& Marketing</h1>
                </div>
                <div className="form-box">
                    <h3>Get a Free <br />Consultation</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Schedule Now"}
                        </button>
                    </form>

                    {/* Display success or error message */}
                    {message && (
                        <div className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    )}
                </div>
            </div>

            {/* Middle Section */}
            <div className="middle-section">
                <div className="middleLeft">
                    <h2>Not Your Average Realtor</h2>
                    <p>
                        We’ll work with you to design marketing services <br />
                        tailored specifically to your audience, ensuring you <br />
                        get the results you’re looking for.
                    </p>
                </div>

                <div className="image-container">
                    <div className="main-image">
                        <img src="/images/ThreeCircle1.svg" alt="Main Realtor" />
                    </div>
                    <div className="small-images">
                        <img src="/images/ThreeCircle2.svg" alt="Client 1" />
                        <img src="/images/ThreeCircle3.svg" alt="Client 2" />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">
                <h2>Why Choose Us?</h2>
                <div className="underline"></div>
                <div className="features">
                    <div className="feature-item">
                        <div className="logoImg">
                            <img src="/images/paintbrush-2.svg" alt="" />
                        </div>

                        <i className="icon-placeholder" />
                        <h3>Potential ROI</h3>
                        <p>
                            With our services, we ensure a potential return on investment
                            that’s worth every penny.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="logoImg">
                            <img src="/images/paintbrush-2.svg" alt="" />
                        </div>

                        <i className="icon-placeholder" />
                        <h3>Design</h3>
                        <p>
                            We design marketing campaigns that stand out from the competition
                            and attract the right audience.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="logoImg">
                            <img src="/images/paintbrush-2.svg" alt="" />
                        </div>

                        <i className="icon-placeholder" />
                        <h3>Marketing</h3>
                        <p>
                            Targeted marketing campaigns to generate quality leads and build a
                            strong brand presence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="background-elements">
                <div className="circle-large"></div>
                <div className="circle-small"></div>
                <div className="semi-circle"></div>
                <div className="line"></div>
            </div>
        </div>
    );5
};

export default HeroSection;

import { useState, useRef } from "react";
import type { FormEvent } from "react";


function Form() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const estimateRef = useRef<HTMLInputElement>(null);

  const [actualValue, setActualValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");
  const [pin] = useState<string>("");


  const createMaskedDisplay = (value: string): string => {
    const digits = value.replace(/\D/g, "");

    const masked = maskPin(digits);
    return masked;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      if (e.key === "Backspace" && actualValue.length > 0) {
        const newValue = actualValue.slice(0, -1);
        setActualValue(newValue);
        setDisplayValue(createMaskedDisplay(newValue));
      }
      return;
    }

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    if (actualValue.length >= 16) {
      e.preventDefault();
      return;
    }

    const newValue = actualValue + e.key;
    setActualValue(newValue);

    setDisplayValue(createMaskedDisplay(newValue));

    e.preventDefault();
  };

  const maskPin = (pin: string) => {
    const masked = "#".repeat(pin.length);
    return masked.match(/.{1,4}/g)?.join("-") || "";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const estimate = estimateRef.current?.value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Estimate:", estimate);
   
    console.log("Submitted value:", actualValue);
  };

  return (
    <>
      <div style={styles.background}>
        <div style={styles.greendiv}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>First Name</label>
            <input
              style={styles.input}
              type="text"
              ref={firstNameRef}
              name="firstName"
              required
            />

            <label style={styles.label}>Last Name</label>
            <input
              style={styles.input}
              type="text"
              ref={lastNameRef}
              name="lastName"
              required
            />

            <label style={styles.label}>Email Address</label>
            <input
              style={styles.input}
              type="email"
              ref={emailRef}
              name="email"
              required
            />

            <label style={styles.label}>Phone Number</label>
            <input
              style={styles.input}
              type="text"
              ref={phoneRef}
              name="phone"
              required
            />

            <label style={styles.label}>Air Fryer Cost Estimate</label>
            <input
              style={styles.input}
              type="text"
              ref={estimateRef}
              name="estimate"
              required
            />
            <label style={styles.label}>Secure Spider Pin</label>

            <input style={styles.input} type="hidden" name="pin" value={pin} />

            <input
              style={styles.input}
              type="text"
              name="pin"
              value={displayValue}
              onKeyDown={handleKeyDown}
              maxLength={19}
              required
            />
            <p style={styles.pinPreview}>{}</p>

            <button style={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

const styles: { [key: string]: React.CSSProperties } = {
  background: {
    position: "relative",
    backgroundImage:
      "url(https://spidr.design/storage/images/GgT4CyaoRqHlaMZiNp3QQFqQptT2amsOijsBYCvb.jpeg)",
    width: "100%",
    height: "98vh",
  },
  greendiv: {
    position: "absolute",
    backgroundColor: "rgba(57, 126, 141, 0.6)",
    width: "500px",
    height: "580px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  form: {
    maxWidth: "500px",
    padding: "0.5rem 2rem",
    background: "rgba(255, 255, 255, 0.0)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#333",
  },
  label: {
    display: "inline-block",
    marginTop: "1.25rem",
    marginBottom: "0.25rem",
    fontWeight: "500",
    color: "white",
    textAlign: "left",
  },
  input: {
    padding: "0.25rem 1rem",
    border: "1px solid #ccc",
    fontSize: "1.0rem",
    width: "100%",
    boxSizing: "border-box",
  },
  submit: {
    marginTop: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    color: "white",
    border: "1px solid #121212",
    padding: "0.75rem 1.5rem",
    borderRadius: "0",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};


import { useState, useRef, ChangeEvent, FormEvent } from 'react'



function Form() {

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const estimateRef = useRef<HTMLInputElement>(null);


  const [pin, setPin] = useState<string>('');


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     const value = e.target;

      const digitsOnly = value.replace(/\D/g, '').slice(0, 16); // max 16 digits
      setPin((prev) => (digitsOnly));

};

  const maskPin = (pin: string) => {
    const masked = '#'.repeat(pin.length);
    return masked.match(/.{1,4}/g)?.join('-') || '';
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);

    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const estimate = estimateRef.current?.value;



    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Estimate:', estimate);
    console.log('Pin:', pin);


  };
    // const displayValue = '#'.repeat(formData.pin.length);
//    const displayValue = formData.pin.replace(/-$/, '');


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
        <input
          style={styles.input}
          type="text"
          name="pin"
          value={maskPin(pin)}
          onChange={handleChange}
          maxLength={19}
          required
        />
        <p style={styles.pinPreview}>{}</p>

        <button style = {styles.submit}>Submit</button>
        </form>

      </div>

      </div>
    </>
  )
}

export default Form

const styles: { [key: string]: React.CSSProperties } = {
  background: {
    position: 'relative',
    backgroundImage: 'url(https://spidr.design/storage/images/GgT4CyaoRqHlaMZiNp3QQFqQptT2amsOijsBYCvb.jpeg)',
    width: '100%',
    height: '98vh',

  },
  greendiv: {
    position: 'absolute',
    backgroundColor: 'rgba(57, 126, 141, 0.6)',
    width: '500px',
    height: '630px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

  },
  form: {
    maxWidth: '500px',
    padding: '0.5rem 2rem',
    background: 'rgba(255, 255, 255, 0.0)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',

  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  label: {
    display: 'inline-block',
    marginTop: '1.25rem',
    marginBottom: '0.25rem',
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
  },
  input: {
    padding: '0.50rem 1rem',
    border: '1px solid #ccc',
    fontSize: '1.0rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  submit: {
    marginTop: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    color: 'white',
    border: '1px solid #121212',
    padding: '0.75rem 1.5rem',
    borderRadius: '0',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },


};




//<div class="map-wrapper" data-0="opacity:1;" data-end="opacity:0.3;" style="background-image: url(https://spidr.design/storage/images/GgT4CyaoRqHlaMZiNp3QQFqQptT2amsOijsBYCvb.jpeg);"></div>
import Image from "next/image"
import Link from 'next/link';

export default function verification() {
    return (
        <section style={{ width: '95%', margin: 'auto', padding: '10px 0', height: '100vh' }}>
            <nav style={{ height: '10%' }}>
                <Image
                    src='/logo.png'
                    alt='Logo'
                    width={70}
                    height={70}
                />
            </nav>
            <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
                <div className='content' style={{ textAlign: 'center', padding: '20px 0' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>Verify your mail</h1>
                    <p style={{ color: 'gray', fontSize: '12px', margin: '20px 0 30px 0' }}>Enter the verification code sent to your email Aqar tech@gmail.com</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="number" className="no-spinner" style={{ height: '55px', width: '55px', border: 'gray solid 1px', borderRadius: '10px', marginRight: '30px', textAlign: 'center', fontSize: 'large' }} />
                    <input type="number" className="no-spinner" style={{ height: '55px', width: '55px', border: 'gray solid 1px', borderRadius: '10px', marginRight: '30px', textAlign: 'center', fontSize: 'large' }} />
                    <input type="number" className="no-spinner" style={{ height: '55px', width: '55px', border: 'gray solid 1px', borderRadius: '10px', marginRight: '30px', textAlign: 'center', fontSize: 'large' }} />
                    <input type="number" className="no-spinner" style={{ height: '55px', width: '55px', border: 'gray solid 1px', borderRadius: '10px', marginRight: '30px', textAlign: 'center', fontSize: 'large' }} />
                    <input type="number" className="no-spinner" style={{ height: '55px', width: '55px', border: 'gray solid 1px', borderRadius: '10px', marginRight: '30px', textAlign: 'center', fontSize: 'large' }} />
                    <input type="number" className="no-spinner" style={{ height: '55px', width: '55px', border: 'gray solid 1px', borderRadius: '10px', textAlign: 'center', fontSize: 'large' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'purple', fontSize: '14px', marginTop: '30px' }}>Didn't receive a code? Resend</p>
                </div>
                <div style={{ width: '20%', margin: 'auto' }}>

                    <Link href="/auth/signin">
                        <button
                            type="submit"
                            className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            style={{ background: 'linear-gradient(to bottom, rgba(75, 2, 75, 0.655), rgba(213, 56, 213, 0.852))', color: 'white', padding: '20px', borderRadius: '30px' }}>
                            Sign in  <span style={{ marginLeft: '10px' }}><i className="fa fa-arrow-right"></i></span>
                        </button>
                    </Link>
                </div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                    <p style={{ fontSize: '14px' }}>
                        By proceeding, you agree to the
                        <span style={{ color: 'purple', cursor: 'pointer' }}> terms and conditions </span>
                        and
                        <span style={{ color: 'purple', cursor: 'pointer' }}> privacy policy</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
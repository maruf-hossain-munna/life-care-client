import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    What are the difference between SQL and NoSQL?
                </h3>
                <p>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).
                    SQL is primarily used to query and operate database systems, MySQL enables you to store, handle, delete, and modify data in an organized way.
                    <br /> NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>

            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    What is JWT, and how does it work?
                </h3>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                </p>
            </div>

            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    What is the difference between javascript and NodeJS?
                </h3>
                <p>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
            </div>

            <div className='my-6'>
                <h3 className="text-3xl mb-2 font-semibold">
                    How does NodeJS handle multiple requests at the same time?
                </h3>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
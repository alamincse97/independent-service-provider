import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container blogs mt-4'>
            <article>
                <h2><span className='fw-bold'>Ques:1</span> What is difference between authentication and Authorisation?</h2>
                <p> <b>Authentication</b> confirms your identity to grant access to the system.It is the process of validating user credentials to gain user access.It determines whether user is what he claims to be.Authentication usually requires a username and a password. Authentication is the first step of authorization so always comes first. <br /> <b>Authorization</b> determines whether you are authorized to access the resousces.It is the process of verifying whether access is allowed or not.It determines what user can and cannot access.Authentication factors required for authorization may vary, depending on the secuirity level.Authorization is done after successful authentication.</p>
            </article>
            <article>
                <h2><span className='fw-bold'>Ques:1</span> What other website will we use instead of firebase?</h2>
                <p>If there was no firebase, we would use all the third party websites list: <br />
                 <b>Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter,
                    LoopBack, SashiDo.</b></p>
            </article>
            <article>
                <h2><span className='fw-bold'>Ques:1</span> What else can be done in firebase without authentication?</h2>
                <p>Firebase Hosting works out-of-the-box with Firebase services, including Cloud Functions,Realtime Database, Cloud Firestore, and Cloud Messaging. You can build powerful microservices and web apps using these complementary Firebase services.</p>
            </article>
        </div>
    );
};

export default Blogs;
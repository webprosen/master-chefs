import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        padding: '35px'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    question: {
        fontSize: '12px',
        marginBottom: '10px'
    },
    answer: {
        fontSize: '10px',
        marginBottom: '30px'
    },
    custom: {
        marginBottom: '5px'
    }
});

const MyDoc = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.heading}>
                <Text>Questions & Answers</Text>
            </View>

            <View style={styles.question}>
                <Text>1. What is the differences between uncontrolled and controlled components?</Text>
            </View>
            <View style={styles.answer}>
                <Text style={styles.custom}>
                    - Uncontrolled components are usually easier to use and require less code, but they don't offer as much control as controlled components.
                </Text>
                <Text>
                    - Controlled components are more flexible and give you more control over the form data, but they require more code and can be more difficult to use.
                </Text>
            </View>

            <View style={styles.question}>
                <Text>2. How to validate React props using PropTypes?</Text>
            </View>
            <View style={styles.answer}>
                <Text style={styles.custom}>
                    - First, install the PropTypes library by running the following command in your terminal.
                </Text>
                <Text style={styles.custom}>
                    - Import the PropTypes library in your component.
                </Text>
                <Text style={styles.custom}>
                    - Declare the propTypes object as a static property of your component class.
                </Text>
                <Text style={styles.custom}>
                    - In the propTypes object, define the types of props you expect to receive and whether they are required or optional
                </Text>
                <Text>
                    - Finally, when a prop is passed to the component that does not match the expected type, a warning will be logged to the console in development mode.
                </Text>
            </View>

            <View style={styles.question}>
                <Text>3. What is the difference between nodejs and express js?</Text>
            </View>
            <View style={styles.answer}>
                <Text style={styles.custom}>
                    - Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code on the server-side.
                </Text>
                <Text>
                    - Express.js is a popular web framework for Node.js that is used to build web applications and APIs. It provides a set of features and tools to simplify and streamline the process of building web applications using Node.js.
                </Text>
            </View>

            <View style={styles.question}>
                <Text>4. What is a custom hook, and why will you create a custom hook?</Text>
            </View>
            <View style={styles.answer}>
                <Text style={styles.custom}>
                    - A custom hook is a function in React that allows you to reuse stateful logic between components. It is a way to extract reusable logic from a component and share it across multiple components, making code more organized and maintainable.
                </Text>
            </View>
        </Page>
    </Document>
);

const Question = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <h2 className='font-bold text-3xl text-center mb-10'>Questions & Answers</h2>

                <div className='mb-10 text-center'>
                    <PDFDownloadLink className='bg-red-600 py-3 px-6 rounded-md text-white font-semibold mt-8 text-lg hover:bg-red-900 transition-colors duration-200' document={<MyDoc />} fileName="blogs.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Now')}
                    </PDFDownloadLink>
                </div>

                <div className="mb-5">
                    <h4 className="text-xl font-bold mb-1">
                        1. What is the differences between uncontrolled and controlled components?
                    </h4>
                    <p className=''>
                        - Uncontrolled components are usually easier to use and require less code, but they don't offer as much control as controlled components.<br></br>
                        - Controlled components are more flexible and give you more control over the form data, but they require more code and can be more difficult to use.
                    </p>
                </div>
                <div className="mb-5">
                    <h4 className="text-xl font-bold mb-1">
                        2. How to validate React props using PropTypes?
                    </h4>
                    <p className=''>
                        - First, install the PropTypes library by running the following command in your terminal.<br></br>
                        - Import the PropTypes library in your component.<br></br>
                        - Declare the propTypes object as a static property of your component class.<br></br>
                        - In the propTypes object, define the types of props you expect to receive and whether they are required or optional<br></br>
                        - Finally, when a prop is passed to the component that does not match the expected type, a warning will be logged to the console in development mode.
                    </p>
                </div>

                <div className="mb-5">
                    <h4 className="text-xl font-bold mb-1">
                        3. What is the difference between nodejs and express js?
                    </h4>
                    <p className=''>
                        - Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code on the server-side.<br></br>
                        - Express.js is a popular web framework for Node.js that is used to build web applications and APIs. It provides a set of features and tools to simplify and streamline the process of building web applications using Node.js.
                    </p>
                </div>

                <div className="mb-5">
                    <h4 className="text-xl font-bold mb-1">
                        4. What is a custom hook, and why will you create a custom hook?
                    </h4>
                    <p className=''>
                        - A custom hook is a function in React that allows you to reuse stateful logic between components. It is a way to extract reusable logic from a component and share it across multiple components, making code more organized and maintainable.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Question;
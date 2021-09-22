import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
    text-align: center;
`;

const Form = styled.form`

`;
const Input = styled.input`

`;
const Label = styled.label`

`;
const Select = styled.select`

`;
const Option = styled.option`

`;

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('A');
    const [pending, setPending] = useState(false);
    const history = useHistory();
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleBody = (e) => {
        setBody(e.target.value);
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPending(true);
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added');
                history.push('/');
            })
    }

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Label>Title:
                    <Input type='text' value={title} onChange={handleTitle} />
                </Label>
                <Label>Body:
                    <Input type='text' value={body} onChange={handleBody} />
                </Label>
                <Label>Author:
                    <Select value={author} onChange={handleAuthor}>
                        <Option value='A'>A</Option>
                        <Option value='B'>B</Option>
                    </Select>
                </Label>
                {!pending && <Input type='submit' value='Submit' />}
                {pending && <Input type='submit' value='Submitting...' />}
            </Form>
        </Wrapper>
    );
};

export default NewBlog;
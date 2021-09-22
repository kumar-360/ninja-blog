import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

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

const UpdateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('A');

    const { id } = useParams();
    const history=useHistory();
    // const {data: blog} = useFetch('http://localhost:8000/blogs/' + id);
    useEffect(() => {
        fetch('http://localhost:8000/blogs/' + id)
            .then(res => {
                if (!res.ok) {
                    throw Error('Data could not be fetched.');
                }
                return res.json();
            })
            .then(blog => {
                setTitle(blog.title);
                setBody(blog.body);
                setAuthor(blog.author);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [id]);

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
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('blog updated');
                history.push(`/blogs/${id}`);
            })
    }

    return (
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
            <Input type='submit' value='Submit' />
        </Form>
    );
};

export default UpdateBlog;
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from './useFetch';

const Wrapper = styled.div`
    text-align: center;
`;
const Error = styled.p`

`;
const Pending = styled.p`

`;
const Title = styled.h2`

`;
const Body = styled.p`

`;
const Button = styled.button`

`;

const SingleBlog = () => {
    const { id } = useParams();
    const { data: blog, error, pending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <Wrapper>
            {pending && <Pending>Loading...</Pending>}
            {error && <Error>{error}</Error>}
            {blog && <div>
                <Title>{blog.title}</Title>
                <Body>{blog.body}</Body>
                <Button onClick={handleDelete}>Delete</Button>
                <Link to={`/blogs/update-blog/${id}`}><Button>Update</Button></Link>
            </div>
            }
        </Wrapper>
    );
};

export default SingleBlog;
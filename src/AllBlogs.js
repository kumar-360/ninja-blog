import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from './useFetch';

const Wrapper = styled.div`
    text-align: center;
`;
const Blog = styled.div`

`;
const Title = styled.h2`

`;
const Author = styled.h3`

`;
const Error = styled.p`

`;
const Pending = styled.p`

`;

const AllBlogs = () => {
    const { data: blogs, error, pending } = useFetch('http://localhost:8000/blogs');

    return (
        <Wrapper>
            {pending && <Pending>Loading...</Pending>}
            {error && <Error>{error}</Error>}
            {blogs && blogs.map((blog) => {
                return (
                    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }} key={blog.id}>
                        <Blog>
                            <Title>{blog.title}</Title>
                            <Author>{blog.author}</Author>
                            <hr />
                        </Blog>
                    </Link>
                );
            })}
        </Wrapper>
    );
};

export default AllBlogs;
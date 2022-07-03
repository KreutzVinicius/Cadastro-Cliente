import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue) 
`;

export const Content = styled.div`
    margin: 0 auto;
    padding: 0 1rem 3rem;
    display:flex;
    align-items: center;
    justify-content: right;


    button{
    font-size: 1.5rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 2rem 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
}
`


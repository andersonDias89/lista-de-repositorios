import styled from "styled-components";

const Styled = styled.div`
li{
  list-style: none;
  margin-bottom: 20px;
  strong{
    font-size: 23px;
    color: #521669;
    
  }
  a{
    color: #871cb1;
    text-decoration: none;
  }

}
`;

interface RepositoryItemProps {
    repository: {
        name : string;
        description : string;
        html_url : string;
        
    }

}

export const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <Styled>
      
          <li>
             <strong>{props.repository.name}</strong>
             <p>{props.repository.description}</p>

             <a href={props.repository.html_url}>
                 Acessar repositório
             </a>
          </li>
      
    </Styled>
  );
};
import styled from "styled-components";

const Styled = styled.div``;

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
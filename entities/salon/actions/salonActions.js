import axios from "axios";
import {WP_URL} from "../../../app/config/config";
import {gql} from '@apollo/client';

export const GET_SALON_ABOUT = gql`
  query GetSalonAbout {
      salon(id: "cG9zdDozNjk2") {
        id
        title
        content(format: RENDERED)
    }
  }
`;

export const GET_SALON_ALL = gql`
query  GetSalonAll {
  salons {
    edges {
      node {
        id
        title
        uri
      }
    }
  }
}
`;


export const getSalonActions = async () => {

    try {
        const response = await axios.get(`${WP_URL}/wp/v2/pages`);
        console.log("response: ", response);
        return response.data;
    } catch (e) {
        if (e.response) {
            // Сервер вернул ответ с ошибкой
            console.error('Server responded with error:', e.response.status, e.response.data);
        } else if (e.request) {
            // Запрос был отправлен, но ответа не было
            console.error('No response received:', e.request);
        } else {
            // Произошла ошибка при настройке запроса
            console.error('Error setting up request:', e.message);
        }
        throw new Error('Failed to fetch pages');
    }
}



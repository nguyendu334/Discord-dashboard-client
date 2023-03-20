import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { validateCookies } from './helpers';
import { Guild } from './types';

const API_URL = 'http://localhost:3001/api';

export const fetchMutualGuilds = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    if (!headers) return { redirect: { destination: '/' } };

    try {
        const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
            headers,
        });
        console.log(guilds);
        return {
            props: {
                guilds,
            },
        };
    } catch (error) {
        console.log(error);
        return { redirect: { destination: '/' } };
    }
};

export const fetchGuild = async (ctx: GetServerSidePropsContext) => {
    const headers = validateCookies(ctx);
    if (!headers) return { redirect: { destination: '/' } };
    try {
        const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${ctx.query.id}`, {
            headers,
        });
        console.log(guild)
        return {props: { guild }};
    } catch (error) {
        console.log(error);
        return { redirect: { destination: '/' } };
    }
}

export const fetchValidGuild = (id: string, headers: HeadersInit) => {
    return fetch(`${API_URL}/guilds/${id}/permissions`, {
        headers,
    });
};

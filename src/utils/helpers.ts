import { GetServerSidePropsContext } from 'next';
import { Guild } from '../utils/types';

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionID = ctx.req.cookies['connect.sid'];
    return sessionID
        ? {
              Cookie: `connect.sid=${sessionID}`,
          }
        : false;
};

export const getIcon = (guild?: Guild) =>
    !guild || !guild.icon
        ? '/df.jpg'
        : `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;

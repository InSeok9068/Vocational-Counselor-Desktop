/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck

import PocketBase from 'pocketbase';
import type { TypedPocketBase } from './pocketbase-types';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL) as TypedPocketBase;

export default pb;

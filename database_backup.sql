--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Debian 15.4-1.pgdg120+1)
-- Dumped by pg_dump version 15.4 (Debian 15.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books (
    id integer NOT NULL,
    author_name character varying(255) NOT NULL,
    book_name character varying(255) NOT NULL,
    rating double precision DEFAULT 0,
    in_stock boolean DEFAULT true
);


ALTER TABLE public.books OWNER TO postgres;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_id_seq OWNER TO postgres;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books (id, author_name, book_name, rating, in_stock) FROM stdin;
1	Darth Vader	Breathing Techniques 101	4	t
2	Yoda	Speaking Backwards and Wisdom	5	t
3	Han Solo	Navigating Asteroids for Dummies	4	f
4	Leia Organa	Leading with Style: Galactic Edition	5	t
5	Obi-Wan Kenobi	High Ground and Other Advantages	5	t
6	Chewbacca	Grooming Tips for the Modern Wookiee	4	t
7	R2-D2	Beeping: An Art Form	5	f
8	C-3PO	Over 6 Million Forms of Communication	4	t
9	Lando Calrissian	Charming Your Way Through the Galaxy	5	f
10	Luke Skywalker	Hand Replacement Therapy: A Memoir	4	t
11	Yoda	Meditations on the Force	5	t
12	Yoda	Dagobah Cooking Recipes	4	t
13	Darth Vader	Parenting in the Dark Side	2	f
14	Han Solo	More on Navigating Asteroids	5	t
15	Chewbacca	Wookiee Etiquette	4	t
16	Obi-Wan Kenobi	Memoirs from Tatooine	5	t
17	Leia Organa	Leadership in Rebel Times	5	t
18	Boba Fett	Bounty Hunting 101	4	f
19	Lando Calrissian	Smooth Deals in Cloud City	4	t
20	R2-D2	Beep Boop Life	4	t
21	C-3PO	10,000 Galactic Languages and You	5	t
22	Kylo Ren	Dealing with Legacy	2	f
23	Rey	Finding Your Place in the Galaxy	5	t
24	Palpatine	Unlimited Power Management	1	f
25	Anakin Skywalker	Podracing Secrets	4	t
26	Mace Windu	When to Say "This Party is Over"	3	t
27	Qui-Gon Jinn	The Force Beyond Life	5	t
28	Luke Skywalker	Jedi Training in 30 Days	4	t
29	Jabba the Hutt	Business Tips for the Underworld	2	f
30	Admiral Ackbar	Recognizing Traps	5	t
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.books_id_seq', 2, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
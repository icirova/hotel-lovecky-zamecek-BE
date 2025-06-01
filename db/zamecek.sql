--
-- lovecQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-08-11 15:07:51

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
-- TOC entry 220 (class 1259 OID 16726)
-- Name: apartments; Type: TABLE; Schema: public; Owner: lovec
--

CREATE TABLE public.apartments (
    apartments_id integer NOT NULL,
    title character varying(60),
    price integer,
    description text,
    capacity integer,
    image character varying(60)
);


ALTER TABLE public.apartments OWNER TO lovec;

--
-- TOC entry 219 (class 1259 OID 16725)
-- Name: apartments_apartments_id_seq; Type: SEQUENCE; Schema: public; Owner: lovec
--

ALTER TABLE public.apartments ALTER COLUMN apartments_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.apartments_apartments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16720)
-- Name: drinks; Type: TABLE; Schema: public; Owner: lovec
--

CREATE TABLE public.drinks (
    drinks_id integer NOT NULL,
    name character varying(60),
    category character varying(60),
    price integer
);


ALTER TABLE public.drinks OWNER TO lovec;

--
-- TOC entry 217 (class 1259 OID 16719)
-- Name: drinks_drinks_id_seq; Type: SEQUENCE; Schema: public; Owner: lovec
--

ALTER TABLE public.drinks ALTER COLUMN drinks_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.drinks_drinks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16714)
-- Name: menu; Type: TABLE; Schema: public; Owner: lovec
--

CREATE TABLE public.menu (
    menu_id integer NOT NULL,
    name character varying(60),
    category character varying(60),
    price integer
);


ALTER TABLE public.menu OWNER TO lovec;

--
-- TOC entry 215 (class 1259 OID 16713)
-- Name: menu_menu_id_seq; Type: SEQUENCE; Schema: public; Owner: lovec
--

ALTER TABLE public.menu ALTER COLUMN menu_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.menu_menu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4852 (class 0 OID 16726)
-- Dependencies: 220
-- Data for Name: apartments; Type: TABLE DATA; Schema: public; Owner: lovec
--

INSERT INTO public.apartments OVERRIDING SYSTEM VALUE VALUES (1, 'Vévodův apartmán', 2500, 'Vítejte ve Vévodově apartmánu, korunovovaném jako vrchol luxusu a pohodlí v našem hotelu. S rozlohou dostatečnou pro královskou rodinu, přináší tento apartmán nezaměnitelný zážitek pro náročné hosty. Vévodův apartmán nabízí dokonalou harmonii mezi moderním luxusem a historickým šarmem loveckého zámečku.', 9, 'vevoduv.webp');
INSERT INTO public.apartments OVERRIDING SYSTEM VALUE VALUES (2, 'Lovecký apartmán', 1500, 'V Loveckém apartmánu se setkává tradice s moderním luxusem. Tento apartmán poskytuje nadstandardní vybavení a služby, které splní i ty nejnáročnější požadavky. Každý detail v tomto apartmánu je pečlivě navržen a proveden tak, aby poskytoval nejvyšší míru pohodlí a exkluzivity. Od luxusních ložnic až po prostorný obývací prostor s krbem a výhledem do přírody, Lovecký apartmán nabízí dokonalé spojení mezi tradičním loveckým šarmem a moderním komfortem.', 9, 'lovecky.webp');
INSERT INTO public.apartments OVERRIDING SYSTEM VALUE VALUES (3, 'Medvědí apartmán', 800, 'Medvědím apartmán je ideální volbou pro rodiny s malými dětmi. Je vybaven s ohledem na potřeby rodin a nabízí veškeré standardní vybavení, které potřebujete pro příjemný pobyt s vašimi malými dobrodruhy. Apartmán poskytuje dostatek prostoru pro celou rodinu. S útulným interiérem a praktickými prvky jako jsou dětská postýlka, hrací koutek a bezpečnostní opatření pro děti, vám Medvědí apartmán umožní strávit nezapomenutelný čas společně s vašimi nejdražšími.', 6, 'medvedi.webp');
INSERT INTO public.apartments OVERRIDING SYSTEM VALUE VALUES (4, 'Lesní apartmán', 450, 'Příjemný 2lůžkový apartmán, který nabízí jednoduché a pohodlné ubytování v srdci přírody. Je ideální volbou pro hosty, kteří hledají klid a relaxaci v prostředí obklopeném lesy a přírodní krajinou. Lesní apartmán vám nabízí základní vybavení a pohodlí, abyste si mohli užít svůj pobyt v Loveckém zámečku Brendy za přijatelnou cenu.', 3, 'lesni.webp');


--
-- TOC entry 4850 (class 0 OID 16720)
-- Dependencies: 218
-- Data for Name: drinks; Type: TABLE DATA; Schema: public; Owner: lovec
--

INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (1, 'Čaj černý', 'hot
', 37);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (2, 'Latte macchiato', 'hot', 45);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (3, 'Espresso', 'hot', 35);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (4, 'Plzeň 10°', 'alcoholic', 27);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (5, 'Plzeň 12 °', 'alcoholic', 37);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (6, 'Fernet Stock Citrus', 'alcoholic', 30);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (7, 'Slivovice', 'alcoholic', 35);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (8, 'Boris Jelzin', 'alcoholic', 40);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (9, 'Plum vodka', 'alcoholic', 30);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (10, 'Čaj zelený Sencha', 'hot', 45);
INSERT INTO public.drinks OVERRIDING SYSTEM VALUE VALUES (11, 'Domácí limonáda zázvorová', 'soft', 65);


--
-- TOC entry 4848 (class 0 OID 16714)
-- Dependencies: 216
-- Data for Name: menu; Type: TABLE DATA; Schema: public; Owner: lovec
--

INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (1, 'Kančí burger s brusinkami', 'lunch', 250);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (2, 'Jelenní wellington', 'lunch', 350);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (3, 'Srnčí ragú na víně', 'lunch', 260);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (5, 'Kančí paštika', 'appetizer', 90);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (6, 'Hovězí vývar s domácími nudlemi', 'soup', 50);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (8, 'Kulajda', 'soup', 50);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (7, 'Tvarohové knedlíky s lesními jahodami', 'dessert', 60);
INSERT INTO public.menu OVERRIDING SYSTEM VALUE VALUES (4, 'Bažantí stehna se zelím a knedlíky', 'lunch', 250);


--
-- TOC entry 4861 (class 0 OID 0)
-- Dependencies: 219
-- Name: apartments_apartments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lovec
--

SELECT pg_catalog.setval('public.apartments_apartments_id_seq', 4, true);


--
-- TOC entry 4862 (class 0 OID 0)
-- Dependencies: 217
-- Name: drinks_drinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lovec
--

SELECT pg_catalog.setval('public.drinks_drinks_id_seq', 11, true);


--
-- TOC entry 4863 (class 0 OID 0)
-- Dependencies: 215
-- Name: menu_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lovec
--

SELECT pg_catalog.setval('public.menu_menu_id_seq', 8, true);


--
-- TOC entry 4703 (class 2606 OID 16732)
-- Name: apartments apartments_pkey; Type: CONSTRAINT; Schema: public; Owner: lovec
--

ALTER TABLE ONLY public.apartments
    ADD CONSTRAINT apartments_pkey PRIMARY KEY (apartments_id);


--
-- TOC entry 4701 (class 2606 OID 16724)
-- Name: drinks drinks_pkey; Type: CONSTRAINT; Schema: public; Owner: lovec
--

ALTER TABLE ONLY public.drinks
    ADD CONSTRAINT drinks_pkey PRIMARY KEY (drinks_id);


--
-- TOC entry 4699 (class 2606 OID 16718)
-- Name: menu menu_pkey; Type: CONSTRAINT; Schema: public; Owner: lovec
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (menu_id);


--
-- TOC entry 4858 (class 0 OID 0)
-- Dependencies: 220
-- Name: TABLE apartments; Type: ACL; Schema: public; Owner: lovec
--

GRANT ALL ON TABLE public.apartments TO lovec;


--
-- TOC entry 4859 (class 0 OID 0)
-- Dependencies: 218
-- Name: TABLE drinks; Type: ACL; Schema: public; Owner: lovec
--

GRANT ALL ON TABLE public.drinks TO lovec;


--
-- TOC entry 4860 (class 0 OID 0)
-- Dependencies: 216
-- Name: TABLE menu; Type: ACL; Schema: public; Owner: lovec
--

GRANT ALL ON TABLE public.menu TO lovec;


-- Completed on 2024-08-11 15:07:51

--
-- lovecQL database dump complete
--


-- NACIONALNOST podaci
INSERT INTO nacionalnost 
	values(1, 'Srbin', 'SRB');
INSERT INTO nacionalnost
	values(2, 'Hrvat', 'HRV');
INSERT INTO nacionalnost
	values(3, 'Amerikanac', 'SAD');
INSERT INTO nacionalnost
	values(4, 'Makedonac', 'MKD');
INSERT INTO nacionalnost
	values(5, 'Grk', 'GRE');
INSERT INTO nacionalnost
	values(6, 'Francuz', 'FRA');
	
INSERT INTO nacionalnost
	values(-100, 'Test', 'TEST');
	
	
-- LIGA podaci
INSERT INTO liga
	values(1, 'Premier League', 'PL');
INSERT INTO liga
	values(2, 'Seria A', 'S-A');
INSERT INTO liga
	values(3, 'Seria B', 'S-B');
INSERT INTO liga
	values(4, 'Super Liga Srbije', 'SL');
INSERT INTO liga
	values(5, 'LA Liga', 'LAL ESP');
INSERT INTO liga
	values(6, 'Bundesliga', 'BL');
INSERT INTO liga
	values(-100, 'TEST', 'Test');
	
	
--TIM podaci
INSERT INTO tim
	values(1, 'Chelsea F.C.',to_date('10.05.1905.','dd.mm.yyyy.'),'London',1);
INSERT INTO tim
	values(2, 'Manchester United F.C.',to_date('10.06.1878.','dd.mm.yyyy.'),'Mancester',1);
INSERT INTO tim
	values(3, 'Liverpool F.C.',to_date('03.06.1892.','dd.mm.yyyy.'),'Liverpul',1);
INSERT INTO tim
	values(4, 'A.S. Roma',to_date('10.10.1927.','dd.mm.yyyy.'),'Rim',2);
INSERT INTO tim
	values(5, 'Venezia FC ',to_date('04.08.1940.','dd.mm.yyyy.'),'Venecija',3);
INSERT INTO tim
	values(6, 'FK Crvena zvezda',to_date('04.03.1945.','dd.mm.yyyy.'),'Beograd',4);
INSERT INTO tim
	values(7, 'FC Barselona',to_date('29.11.1899.','dd.mm.yyyy.'),'Barselona',5);
INSERT INTO tim
	values(8, 'Real Madrid F.C',to_date('06.03.1902.','dd.mm.yyyy.'),'Madrid',5);
INSERT INTO tim
	values(9, 'FC Bayern Munich',to_date('27.02.1900.','dd.mm.yyyy.'),'Minhen',6);
INSERT INTO tim
	values(-100, 'FC TEST',to_date('01.01.2000', 'dd.mm.yyyy'),'TESTGRAD',5);
--IGRAC podaci

INSERT INTO igrac
	values(1, 'Davor','Jelic','00123412',to_date('15.01.2000.','dd.mm.yyyy.'),1,3);
INSERT INTO igrac
	values(2, 'Milan','Novcic','00123433',to_date('10.02.1999.','dd.mm.yyyy.'),1,1);
INSERT INTO igrac
	values(3, 'Mihajlo','Strajin','00123112',to_date('20.07.1999.','dd.mm.yyyy.'),1,6);
INSERT INTO igrac
	values(4, 'Dragan','Majkic','00412633',to_date('18.01.2000.','dd.mm.yyyy.'),1,9);
INSERT INTO igrac
	values(5, 'Hrvoje','Sep','76723412',to_date('15.04.1993.','dd.mm.yyyy.'),2,9);
INSERT INTO igrac
	values(6, 'John','Smith','00983412',to_date('16.04.2000.','dd.mm.yyyy.'),3,1);
INSERT INTO igrac
	values(7, 'Nick','Wiliams','60983412',to_date('16.08.1990.','dd.mm.yyyy.'),3,3);
INSERT INTO igrac
	values(8, 'Nikola','Ivanovski','70983412',to_date('20.09.1995.','dd.mm.yyyy.'),4,8);
INSERT INTO igrac
	values(9, 'Cyril','Gane','00789412',to_date('01.04.1990.','dd.mm.yyyy.'),6,5);
INSERT INTO igrac
	values(10, 'Nicolas','Stefanos','22983412',to_date('18.06.1994.','dd.mm.yyyy.'),5,2);
		   
INSERT INTO igrac
	values(-100, 'TESTIME','TESTPREZIME','22984444',to_date('01.01.1994.','dd.mm.yyyy.'),4,3);	
	
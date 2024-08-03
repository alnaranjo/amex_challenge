import { delay, http, HttpResponse } from 'msw';

export const handler = http.get(
	'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb',
	async () => {
		await delay();
		return HttpResponse.json(
			JSON.parse(
				'[{"first":"Arturo","last":"Harber","email":"Arturo.Harber@gwendolyn.biz","address":"4505 Bell Isle","created":"September 17, 2021","balance":"$9,632.11"},{"first":"Sibyl","last":"Ritchie","email":"ivorywolf07@gmail.com","address":"05962 Kameron Estate","created":"July 27, 2014","balance":"$5,338.09"},{"first":"Osvaldo","last":"Schaefer","email":"plumsquirrel94@gmail.com","address":"199 Mya Path","created":"July 20, 2015","balance":"$6,308.49"},{"first":"Mike","last":"Connelly","email":"Mike.Connelly@janie.com","address":"42296 Botsford Vista","created":"November 25, 2022","balance":"$8,372.14"},{"first":"Diana","last":"Schultz","email":"Diana.Schultz@tomas.net","address":"60016 Lazaro Tunnel","created":"March 21, 2020","balance":"$5,413.06"},{"first":"Alexanne","last":"Hilpert","email":"Alexanne.Hilpert@dana.biz","address":"1893 Torrey Corners","created":"January 21, 2019","balance":"$6,140.66"},{"first":"Mellie","last":"Powlowski","email":"Mellie.Powlowski@hollis.net","address":"90123 Trever Estate","created":"April 5, 2018","balance":"$2,703.02"},{"first":"Loraine","last":"Dickens","email":"Loraine.Dickens@keven.info","address":"891 Karina Turnpike","created":"May 14, 2018","balance":"$3,787.90"},{"first":"Glen","last":"Schultz","email":"orangewolf28@gmail.com","address":"2706 Braun Junctions","created":"April 28, 2022","balance":"$6,798.42"},{"first":"Blake","last":"Morar","email":"Blake.Morar@anita.biz","address":"511 Simonis Rest","created":"August 30, 2022","balance":"$4,934.01"},{"first":"Paul","last":"Wolf","email":"bluewolf71@gmail.com","address":"750 Waters Drive","created":"September 14, 2022","balance":"$6,258.11"},{"first":"Elmer","last":"Bernier","email":"Elmer.Bernier@shaun.name","address":"875 Dayna Village","created":"January 30, 2015","balance":"$4,903.81"},{"first":"Annabelle","last":"Abshire","email":"mintgreenfrog66@gmail.com","address":"92365 Crooks Ways","created":"January 13, 2020","balance":"$6,568.50"},{"first":"Lavern","last":"Schuster","email":"Lavern.Schuster@emilia.info","address":"6174 Langosh Skyway","created":"October 19, 2021","balance":"$929.11"},{"first":"Frank","last":"Lehner","email":"whitewolf50@gmail.com","address":"51002 Jody Lake","created":"August 1, 2020","balance":"$769.91"},{"first":"Rigoberto","last":"Nikolaus","email":"Rigoberto.Nikolaus@nicolas.name","address":"396 Leonel Harbor","created":"February 19, 2022","balance":"$2,073.85"},{"first":"Oleta","last":"Bailey","email":"Oleta.Bailey@jeramie.info","address":"39516 Schroeder Manor","created":"April 9, 2021","balance":"$9,567.10"},{"first":"Esteban","last":"Kling","email":"purplegiraffe32@gmail.com","address":"2220 Viva Village","created":"July 13, 2020","balance":"$3,714.90"},{"first":"Enoch","last":"Stark","email":"Enoch.Stark@pete.com","address":"06914 Waino Avenue","created":"October 5, 2017","balance":"$9,582.71"},{"first":"Geovanni","last":"Ortiz","email":"tealwolf51@gmail.com","address":"3392 Alexandria Locks","created":"January 4, 2019","balance":"$7,568.33"},{"first":"Arne","last":"Graham","email":"Arne.Graham@celia.com","address":"23069 Daisha Ports","created":"December 29, 2022","balance":"$8,755.32"},{"first":"Sunny","last":"Ullrich","email":"violetsquirrel45@gmail.com","address":"136 Jesse Turnpike","created":"October 7, 2017","balance":"$1,650.83"},{"first":"Jeanie","last":"Frami","email":"purplefrog00@gmail.com","address":"79062 Zetta Brooks","created":"March 6, 2024","balance":"$9,630.05"},{"first":"Lola","last":"Blick","email":"goldturtle16@gmail.com","address":"285 Yadira Turnpike","created":"June 6, 2015","balance":"$8,757.65"},{"first":"Ottis","last":"Powlowski","email":"Ottis.Powlowski@felipa.info","address":"564 Ruecker Harbors","created":"February 26, 2016","balance":"$7,316.92"},{"first":"Ilene","last":"Wiza","email":"Ilene.Wiza@art.biz","address":"176 Nitzsche Isle","created":"March 1, 2023","balance":"$1,551.53"},{"first":"Mikayla","last":"Smitham","email":"Mikayla.Smitham@toney.biz","address":"765 Alessia Rapids","created":"December 27, 2020","balance":"$8,065.87"},{"first":"Don","last":"Smith","email":"magentarabbit27@gmail.com","address":"09634 Langworth Burgs","created":"April 21, 2018","balance":"$179.04"},{"first":"Sonya","last":"Smith","email":"Sonya.Smith@sammy.info","address":"584 Samanta Drive","created":"July 7, 2023","balance":"$5,993.75"},{"first":"Berta","last":"Mraz","email":"ivoryfrog65@gmail.com","address":"153 Trever Flats","created":"November 16, 2021","balance":"$2,659.58"},{"first":"Emie","last":"Rempel","email":"Emie.Rempel@julien.net","address":"841 Aleen Dale","created":"January 26, 2016","balance":"$5,934.47"},{"first":"Henry","last":"Blanda","email":"blacksquirrel87@gmail.com","address":"601 Borer Flats","created":"April 20, 2016","balance":"$1,509.67"},{"first":"Adela","last":"Larkin","email":"turquoiseturtle44@gmail.com","address":"476 Alysson Keys","created":"May 2, 2016","balance":"$5,291.01"},{"first":"Theo","last":"Klein","email":"Theo.Klein@esther.com","address":"2529 Coty Extensions","created":"August 20, 2022","balance":"$290.39"},{"first":"Jefferey","last":"Streich","email":"orchidrabbit30@gmail.com","address":"87592 Bayer Junctions","created":"October 20, 2016","balance":"$9,518.01"},{"first":"Kailey","last":"Prosacco","email":"Kailey.Prosacco@keyon.name","address":"560 Adell Manor","created":"May 21, 2020","balance":"$7,433.87"},{"first":"Alfreda","last":"Pollich","email":"Alfreda.Pollich@katharina.com","address":"8984 Jazlyn Tunnel","created":"September 14, 2023","balance":"$8,582.11"},{"first":"Camylle","last":"Pagac","email":"Camylle.Pagac@adrien.biz","address":"58830 Kohler Valley","created":"September 22, 2017","balance":"$2,035.91"},{"first":"Fernando","last":"OKon","email":"Fernando.OKon@ansel.net","address":"36053 Makenna Knolls","created":"January 16, 2023","balance":"$7,496.45"},{"first":"Eladio","last":"Emard","email":"Eladio.Emard@sammy.org","address":"2416 Consuelo Brooks","created":"July 15, 2016","balance":"$1,673.86"},{"first":"Clifford","last":"Hamill","email":"bluewolf30@gmail.com","address":"582 Quitzon Rapids","created":"July 13, 2021","balance":"$6,798.27"},{"first":"Lura","last":"Schuppe","email":"bluefrog51@gmail.com","address":"74857 Gutmann Point","created":"November 29, 2020","balance":"$7,828.34"},{"first":"Alexys","last":"Collier","email":"Alexys.Collier@floyd.biz","address":"7079 Katrina Islands","created":"November 15, 2014","balance":"$1,671.28"},{"first":"Beau","last":"Stark","email":"Beau.Stark@dane.net","address":"594 Raymond Bridge","created":"December 23, 2021","balance":"$1,545.88"},{"first":"Davin","last":"Heaney","email":"tanrabbit28@gmail.com","address":"72745 Mariane Route","created":"June 5, 2017","balance":"$8,366.03"},{"first":"Lisandro","last":"DAmore","email":"Lisandro.DAmore@ibrahim.org","address":"8348 Felipe Ways","created":"September 10, 2018","balance":"$9,191.20"},{"first":"Dedric","last":"Gislason","email":"Dedric.Gislason@dante.org","address":"5882 Goldner Prairie","created":"August 14, 2018","balance":"$2,129.40"},{"first":"Elva","last":"Ferry","email":"Elva.Ferry@oda.biz","address":"096 Oberbrunner Ports","created":"June 14, 2021","balance":"$3,377.42"},{"first":"Calista","last":"Flatley","email":"Calista.Flatley@abner.net","address":"745 Wunsch Roads","created":"September 24, 2023","balance":"$3,269.18"},{"first":"Nia","last":"Hegmann","email":"Nia.Hegmann@loraine.com","address":"1113 Easton Valley","created":"January 3, 2015","balance":"$58.25"},{"first":"Dawn","last":"Quitzon","email":"fuchsiagiraffe40@gmail.com","address":"807 Reichert Stravenue","created":"July 6, 2016","balance":"$6,934.06"},{"first":"Camylle","last":"Streich","email":"Camylle.Streich@irma.net","address":"091 Effertz Radial","created":"March 9, 2019","balance":"$5,115.30"},{"first":"Lorna","last":"Erdman","email":"Lorna.Erdman@phoebe.com","address":"96606 Lydia Fork","created":"November 16, 2019","balance":"$8,347.33"},{"first":"Abner","last":"Gleason","email":"greenturtle03@gmail.com","address":"37976 Gail Trail","created":"April 11, 2021","balance":"$3,318.92"},{"first":"Audreanne","last":"Haag","email":"Audreanne.Haag@dora.info","address":"759 Luettgen Valleys","created":"November 10, 2016","balance":"$7,854.83"},{"first":"Elinore","last":"Pfeffer","email":"Elinore.Pfeffer@amanda.name","address":"310 Swift Trail","created":"November 29, 2020","balance":"$4,575.51"},{"first":"Jean","last":"Von","email":"Jean.Von@jarrell.name","address":"2282 Casimer Throughway","created":"October 31, 2016","balance":"$7,233.36"},{"first":"Jamie","last":"Harris","email":"cyanturtle05@gmail.com","address":"993 Shanahan Land","created":"August 5, 2023","balance":"$4,004.01"},{"first":"Green","last":"Murray","email":"Green.Murray@marlen.net","address":"926 VonRueden Loop","created":"December 28, 2015","balance":"$3,090.61"},{"first":"Lucious","last":"White","email":"maroonwolf90@gmail.com","address":"295 Delfina Square","created":"December 3, 2017","balance":"$4,794.50"},{"first":"Emmie","last":"Ratke","email":"yellowturtle38@gmail.com","address":"9824 Carroll Trail","created":"October 18, 2019","balance":"$7,052.59"},{"first":"Halle","last":"Grady","email":"bluewolf54@gmail.com","address":"4610 Miller Plaza","created":"December 15, 2017","balance":"$3,607.09"},{"first":"Rylan","last":"Pouros","email":"Rylan.Pouros@royce.com","address":"8369 Schuppe Extensions","created":"February 15, 2023","balance":"$6,908.00"},{"first":"Irma","last":"Spinka","email":"plumrabbit76@gmail.com","address":"2132 Daphney Fort","created":"July 2, 2021","balance":"$2,113.22"},{"first":"Torrey","last":"Tillman","email":"Torrey.Tillman@jairo.com","address":"30870 Leffler Motorway","created":"October 31, 2015","balance":"$8,437.88"},{"first":"Lawson","last":"Quitzon","email":"Lawson.Quitzon@amelia.org","address":"558 Bogisich Causeway","created":"December 11, 2023","balance":"$5,487.51"},{"first":"Cary","last":"Glover","email":"silvergiraffe54@gmail.com","address":"388 Dereck Cliff","created":"June 7, 2015","balance":"$1,597.34"},{"first":"Arvel","last":"Kohler","email":"tangiraffe45@gmail.com","address":"443 Stanton Pines","created":"July 31, 2016","balance":"$5,857.68"},{"first":"Herbert","last":"Johns","email":"Herbert.Johns@zachariah.name","address":"33862 Wuckert Shores","created":"February 6, 2015","balance":"$7,296.36"},{"first":"Kathryne","last":"Bartoletti","email":"plumsquirrel01@gmail.com","address":"69886 Durgan Tunnel","created":"March 12, 2016","balance":"$2,219.68"},{"first":"Vilma","last":"Hayes","email":"Vilma.Hayes@mohammed.biz","address":"35155 Adriel Highway","created":"May 3, 2020","balance":"$486.59"},{"first":"Meredith","last":"Pouros","email":"skyblueturtle73@gmail.com","address":"9972 Lakin Squares","created":"October 3, 2017","balance":"$9,315.14"},{"first":"Missouri","last":"Doyle","email":"Missouri.Doyle@josephine.name","address":"929 Alvera Wells","created":"December 14, 2016","balance":"$1,745.77"},{"first":"Giovanny","last":"Fay","email":"Giovanny.Fay@isabella.com","address":"333 Oliver Mall","created":"August 4, 2020","balance":"$502.66"},{"first":"Kara","last":"Schulist","email":"indigofrog64@gmail.com","address":"201 Durgan Bypass","created":"March 27, 2022","balance":"$8,503.72"}]'
			),
			{
				status: 202,
				statusText: 'Mocked status',
			}
		);
	}
);

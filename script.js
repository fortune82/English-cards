const word = document.querySelector('.word'),
      btnPrew = document.querySelector('.prew'),
      btnNext = document.querySelector('.next'),
      [...category] = document.querySelectorAll('.category'),
      [...activeLi] = document.querySelectorAll("li"),
      onOff = document.querySelector(".onOff"),
      outputWindow = document.querySelector(".outputWindow")
   
const personal = ["Мистер, господин (не культурно, часто пренебрежительно)", "Mister ['mɪstə] ", "Дама (обращение)", "Lady ['leɪdɪ] ", "Господин, джентльмен", "Gentleman (gentlemen)", "Мэм (обращение)", "Madam (чаще – ma’am)  ['mædəm (mæm)]", "Мисс (обращение к незамужней даме)", "Miss", "Миссис (обращение к замужней даме), также стоит перед фамилией замужней дамы", "Missis (Mrs) ['mɪsɪz]", "Обращение к даме, если не известно, замужем ли, дабы её не обидеть", "Ms [mɪz]", "Имя и фамилия","Name","Имя", "First name ", "Фамилия","Last name/ surname / family name", "Возраст", "Age ", "Малыш, младенец", "Baby ", "Подросток", "Teenager / adolescent ", "Ребенок (нейтр.)", "Child ", "Взрослый","Adult  ['ædʌlt] ", "Старый", "Old ", "Сколько Вам лет?", "How old are you? ", "Мне ... .(25)", "I am … (25) ", "Замужем", "Married ['mærɪd] ", "В разводе", "Divorced  [dɪ'vɔ:st] ", "Не замужем/ холост/ не встречается", "Single", "Овдовевший", "Widowed ['wɪdəud] ", "Ребенок (разг. Неформ.)", "Kid ", "Ребенок (сленг) (только при обращении к своему чаду)",	"Kiddo 	[ʹkıdəʋ]", "Маленький ребенок (начинающий ходить)",	"Toddler 	['tɔdlə]", "Ребенок, отродье (пренебрежительно)",	"Brat 	[bræt]",  "Личность",	"Personality 	[pə:sə'nælɪtɪ]", "Известная личность, поп-звезда",	"Celebrity / pop star	[sɪ'lebrɪtɪ] / [pɔp sta:]", "Предки, родня",	"Folks 	[fəuks]" , "20-24",	"Early twenties 	['ə:lɪ-'twentɪz]",  "24-26",	"Mid- twenties 	[mɪd-'twentɪz] ", "25-29",	"Late twenties 	[leɪt-'twentɪz] ", "Мне примерно ...",	"I am about … 	[aɪ æm ə'baut...]", "40+",	"Middle-aged	['mɪdəl-eɪdʒd]", "На пенсии",	"Retired 	[rɪ'taɪəd] ", "Пожилой",	"Elderly 	['eldəlɪ] ", "В 19 лет / в возрасте 19 лет",	"At 19 / at the age of 19 	[æt 19 / æt ðə eɪdʒ əv19]", "Семейное положение",	"Marital / family status 	['mærɪtəl / 'fæmɪlɪ 'steɪtəs]", "Пол",	"Gender / sex 	['dʒendə / seks]", "Контактные данные", "Contact information 	['kɒntækt ˌɪnfə'meɪʃ(ə)n]", "Мобильный (сотовый)", "Mobile / cell number 	['məubaɪl / sel 'nʌmbə]", "Номер", "Number	['nʌmbə]", "Домашний номер", "Home number 	[həʊm 'nʌmbə]", "Рабочий номер",	"Work (office) number	[wə:k ('ɒfɪs) 'nʌmbə]", "Адрес", "Address 	[ə'dress]", "Какой у Вас номер телефона?", "What is your phone number? 	[wɒt ɪz jɔ:(r) fəʊn 'nʌmbə]", "Какой у Вас адрес?", "What is your address? 	[wɒt ɪz jɔ:(r) ə'dress]"]

const character = [  "Голодный", "Hungry ['hʌŋgrɪ]", "Большой", "Big	[bɪg]", "Большой / крупный", "Large	[lɑːʤ]", "Маленький", "Little / small	['lɪtl] / [smɔːl]", "Горячий", "Hot	[hɔt]", "Занятой", "Busy	['bɪzɪ]", "Помешанный (на чем-л.)", "Crazy (about)	['kreɪzɪ]", "Настоящий", "Real	[rɪəl]", "Строгий", "Strict	[strɪkt]", "Настоящий", "True	[truː]", "Реалист", "Realist	[ˈrɪəlɪst]", "Патриотичный", "Patriotic	[ˌpætrɪ'ɔtɪk]", "Импульсивный", "Impulsive	[ɪm'pʌlsɪv]", "Взволнованный", "Excited	[ɪk'saɪtɪd]", "Ревнивый", "Jealous	['ʤeləs]", "Наивный", "Naive	[naɪˈiːv]", "Пассивный", "Passive	[ˈpæsɪv]", "Странный, чудной", "Weird	[wɪəd]", "Коварный, хитрый", "Sly	[slaɪ]", "Непосредственный", "Spontaneous	[spɔn'teɪnɪəs]", "Непредсказуемый", "Unpredictable	[ˌʌnprɪ'dɪktəbl]", "Необычный", "Unusual / uncommon	[ʌn'juːʒ(ə)l] / [ʌn'kɔmən]", "Черта характера", "Character trait	[ˈkærɪktə(r) treɪt]", "Скрупулезный", "Accurate	['ækjərət]", "Ужасный (крутой)", "Awesome	['ɔːsəm]", "Испытывающий скуку", "Bored	[bɔːd]", "Капризный, нетерпеливый", "Capricious / fretful / impatient	[kə'prɪʃəs] / ['fretf(ə)l] / [ɪm'peɪʃ(ə)nt]", "Необщительный", "Unsociable	[ʌn'səuʃəbl]", "Хитрый, лукавый, коварный; пронырливый", "Cunning	['kʌnɪŋ]", "Эксцентричный", "Eccentric	[ɪk'sentrɪk]", "Беспечный", "Light-hearted / easy-going	[ˌlaɪtˈhɑːtɪd] / [i:zi:gəuiŋ]", "Замкнутый", "Reserved	[rɪ'zɜːvd]", "Задумчивый", "Thoughtful	[θɔːtf(ə)l]", "Непринужденный, раскованный", "Relaxed	[rıʹlækst]", "Меланхоличный", "	Melancholic	[ˌmelən'kɔlɪk]", "Обыкновенный", "Ordinary / average	['ɔːd(ə)n(ə)rɪ] / ['æv(ə)rɪʤ]", "Жесткий, суровый", "Tough	[tʌf]", "Positive traits", "Позитивные черты характера", "Дружелюбный	Friendly	['frendlɪ]", "Умный", "Clever	[ˈklevə(r)]", "Умный", "Smart	[smɑːt]", "Умный, разумный", "Intelligent	[ɪnˈtelɪdʒənt]", "Красивый", "Beautiful	['bjuːtɪf(ə)l]", "Хороший", "Good	[gud]", "Серьезный", "Serious	[ˈsɪərɪəs]", "Счастливый", "Happy	['hæpɪ]", "Честный",	"Honest	['ɔnɪst]", "Идеальный", "Ideal / perfect	[aɪˈdiːəl] / ['pɜːfɪkt]", "Важный",	"Important	[ɪm'pɔːt(ə)nt]", "Добрый", "Kind	[kaɪnd]", "Позитивный", "Positive	[ˈpɒzɪtɪv]", "Терпеливый", "Patient	[ˈpeɪʃ(ə)nt]", "Организованный", "Organized	['ɔːg(ə)naɪzd]", "Активный", "Active	[ˈæktiv]", "Мудрый, рассудительный", "Wise	[waɪz]", "Общительный", "Sociable	['səuʃəb(ə)l]", "Веселый", "Cheerful / bright	['ʧɪəf(ə)l] / [braɪt]", "Оптимист", "Optimist	[ˈɒptɪmɪst]", "Внимательный, заботливый", "Attentive	[ə'tentɪv]",   "Чуткий, чувствительный", "Sensitive	['sen(t)sɪtɪv]", "Трудолюбивый", "Hard-working	['hɑːdˌwɜːkɪŋ]", "Прекрасный", "Wonderful	['wʌndəf(ə)l]", "Ответственный", "Responsible	[rɪˈspɒnsɪb(ə)l]", "Независимый", "Independent	[ˌɪndɪ'pendənt]", "Привлекательный", "Attractive	[ə'træktɪv]", "Справедливый","Fair 	[feər]", "Амбициозный, честолюбивый", "Ambitious	[æm'bɪʃəs]", "Смелый", "Brave	[breɪv]", "Квалифицированный", "Efficient	[ɪ'fɪʃ(ə)nt]", "Заботливый, проявляющий заботу", "Careful	['keəf(ə)l]", "Тихий, спокойный", "Calm	[kɑːm]", "Гордый; обладающий чувством собственного достоинства", "Proud	[praud]", "Активный, энергичный", "Energetic	[ˌenə'ʤetɪk]", "Чудный", "Lovely	['lʌvlɪ]", "Веселый", "Merry	['merɪ]", "Скромный", "Modest	[ˈmɒdɪst]", "Талантливый", "Talented	['tæləntɪd]", "Гениальный", "Genius	['ʤiːnɪəs]", "Застенчивый", "Shy	[ʃaɪ]", "Надежный, верный", "Reliable	[rɪˈlaɪəbəl]", "Толерантный", "Tolerant	[ˈtɒlərənt]", "Зрелый", "Mature	[mə'tjuə]", "Здравомыслящий; разумный", "Sensible	['sen(t)sɪb(ə)l]", "Застенчивый, робкий, скромный", "Bashful	['bæʃf(ə)l]", "С широкими взглядами, с широким кругозором", "Broad-minded	[ˌbrɔːd'maɪndɪd]", "Очаровательный", "Charming	['ʧɑːmɪŋ]", "Уверенный в себе", "Confident	['kɔnfɪd(ə)nt]", "Верный, преданный", "Loyal	['lɔɪəl]", "Любопытный", "Curious	[ˈkjʊərɪəs]", "Забавный", "Humorous / amusing	['hjuːm(ə)rəs] / [ə'mjuːzɪŋ]", "Решительный, непоколебимый, стойкий", "Determined	[dɪ'tɜːmɪnd]", "Дисциплинированный", "Disciplined	['dɪsəplɪnd]", "Бережливый, расчетливый", "Economical	[ˌiːkə'nɔmɪk(ə)l]", "Восторженный; полный энтузиазма", "Enthusiastic	[ɪnˌθjuːzɪ'æstɪk]", "Великолепный", "Excellent	['eks(ə)l(ə)nt]", "Очаровательный", "Fascinating	['fæsɪneɪtɪŋ]", "Великодушный, щедрый", 	"Generous ['ʤen(ə)rəs]", "Одаренный", "Gifted	['gɪftɪd]", "Гуманный", "Humane	[hjuːˈmeɪn]", "Довольный", "Pleased	[pliːzd]", "Благоразумный", "Reasonable	['riːz(ə)nəb(ə)l]", "Волевой", "Strong-willed	[stroŋ- wild]", "Понимающий, отзывчивый", "Understanding	[ˌʌndə'stændɪŋ]", "Остроумный	Witty	[ˈwɪtɪ]",  "Негативный черты характера", "Negative traits", "Плохой", "Bad	[bæd]", "Холодный", "Cold	[kəuld]", "Глупый", "Silly	['sɪlɪ]", "Злой", "Angry	[ˈæŋɡrɪ]", "Ленивый", "Lazy	[leɪzɪ]", "Скучный", "Boring / dull	['bɔːrɪŋ] / [dʌl]", "Жадный", "Greedy	[ˈɡriːdɪ]", "Эгоистичный", "Selfish	['selfɪʃ]", "Глупый, тупой; скучный", "Stupid / dull	[ˈstjuːpɪd] / [dʌl]", "Ужасный", "Terrible	['terəb(ə)l]", "Агрессивный, пробивной, настойчивый", "Aggressive	[ə'gresɪv]",   "Уродливый", "Ugly	['ʌglɪ]", "Нервный", "Nervous	['nɜːvəs]", "Расстроенный", "Upset	[ʌp'set]", "Жестокий", "Cruel	[ˈkruːəl]", "Ужасный", "Horrible	['hɔrəb(ə)l]", "Унылый, угрюмый", "Moody	['muːdɪ]", "Мерзкий", "Nasty	['nɑːstɪ]",  "Пессимист", "Pessimist	[ˈpesɪmɪst]", "Циничный", "Cynical	[ˈsɪnɪkəl]", "Зависимый (от)", "Dependent (on)	[dɪ'pendənt]", "Отвратительный", "Disgusting	[dɪs'gʌstɪŋ]", "Завистливый", "Envious	['envɪəs]", "Глупый; взбалмошный", 	"Foolish	['fuːlɪʃ]"
]

const profession = [
"Управление",	"Management	['mænɪʤmənt]", 
"Президент", "President	['prezɪd(ə)nt]", 
"Вице-президент", "Vice-president", "[ˌvaɪs'prezɪd(ə)nt]", 
"Ответственное должностное лицо (исполнительное)",	"Executive officer (CEO)	[ɪg'zekjutɪv  'ɔfɪsə] ([ˈsiːiːəʊ])", 
"Директор, член совета директоров",	"Director	[dɪ'rektə], [daɪ-]",
"Директор-распорядитель, управляющий / финансовый директор / маркетинговый директор",	"Managing / financial / marketing director	 ['mænɪʤɪŋ] / [faɪ'nænʃ(ə)l] / ['mɑːkɪtɪŋ] [dɪ'rektə]",
"Заместитель управляющего",	"Deputy	['depjutɪ]",
"Генеральный управляющий; директор предприятия",	"General manager	['ʤen(ə)r(ə)l 'mænɪʤə]",
"Помощник заведующего",	"Assistant manager	[ə'sɪst(ə)nt 'mænɪʤə]",
"Начальник отдела кадров",	"Personnel manager	[ˌpɜːs(ə)'nel 'mænɪʤə]",
"Руководитель производства",	"Production manager	[prə'dʌkʃ(ə)n 'mænɪʤə]",
"Менеджер по маркетингу",	"Marketing manager	['mɑːkɪtɪŋ 'mænɪʤə]",
"Агент по сбыту",	"Sales manager	[seɪlz 'mænɪʤə]",
"Руководитель проекта",	"Project  manager	['prɔʤekt 'mænɪʤə]",
"Надсмотрщик, надзиратель; контролёр, смотритель",	"Supervisor	['s(j)uːpəvaɪzə]",
"Инспектор, ревизор",	"Inspector	[ɪn'spektə]",
"Офис",	"Office	['ɔfɪs]",
"Конторщик, заведующий канцелярии",	"Office clerk	['ɔfɪs klɑːk ]",
"Секретарь (в учреждении)",	"Receptionist	[rɪ'sepʃ(ə)nɪst]",
"Секретарь, помощник",	"Secretary	['sekrət(ə)rɪ]",
"Банк	Bank",	"	[bæŋk]",
"Банкир",	"	Banker	['bæŋkə]",
"Банковский служащий",	"Bank officer	[bæŋk 'ɔfɪsə]",
"Бухгалтер",	"Accountant/ bookkeeper	[ə'kauntənt]/ ['bukˌkiːpə]",
"Экономист",	"Economist	[ɪ'kɔnəmɪst]",
"Кассир",	"Cashier	[kæ'ʃɪə]",
"Аудитор, бухгалтер-ревизор",	"Auditor	['ɔːdɪtə]",
"Продажи и Магазины",	"Sales & Stores	[seɪlz] & [stɔːz]",
"Торговый представитель",	"Sales representative	[seɪlz reprɪ'zentətɪv]",
"Продавец, торговец",	"Salesperson/salesman/ saleswoman/seller	['seɪlzˌpɜːs(ə)n]/ ['seɪlzmən]/ ['seɪlzˌwumən]/ ['selə]",
"Покупатель",	"Buyer	['baɪə]",
"Творческая работа",	"Art & Creative work	[ɑːt] & [krɪ'eɪtɪv wɜːk]",
"Музыкант",	"Musician	[mjuː'zɪʃ(ə)n]",
"Композитор",	"Composer	[kəm'pəuzə]",
"Певец",	"Singer	['sɪŋə]",
"Танцор",	"Dancer	['dɑːn(t)sə]",
"Художник",	"Artist	['ɑːtɪst]",
"Художник/маляр",	"Painter	['peɪntə]",
"Скульптор",	"Sculptor	['skʌlptə]",
"Архитектор",	"Architect	['ɑːkɪtekt]",
"Режиссёр",	"Film director	[fɪlm dɪ'rektə]",
"Продюсер",	"Producer	[prə'djuːsə]",
"Художественный директор",	"Art director	[ɑːt dɪ'rektə]",
"Актёр/актриса",	"Actor/actress	['æktə] / ['æktrəs]",
"Оператор/фотограф",	"Cameraman	['kæm(ə)rəmæn]",
"Журналист",	"Journalist	['ʤɜːn(ə)lɪst]",
"Репортёр",	"Reporter	[rɪ'pɔːtə]",
"Корреспондент",	"Correspondent	[ˌkɔrɪ'spɔnd(ə)nt]",
"Фотограф",	"Photographer	[fə'tɔgrəfə]",
"Школа и Колледж",	"School & College	[skuːl] & ['kɔlɪʤ]",
"Директор (школы)/ ректор (университета)",	"Principal	['prɪn(t)səp(ə)l]",
"Профессор",	"Professor	[prə'fesə]",
"Учитель",	"Teacher	['tiːʧə]",
"Студент Ученик",	"Student	['st(j)uːd(ə)nt]",
"Строительство",	"Construction	[kən'strʌkʃ(ə)n]",
"Инженер",	"Engineer	[ˌenʤɪ'nɪə]",
"Техник",	"Technician	[tek'nɪʃ(ə)n]",
"Механик",	"Mechanic	[mɪ'kænɪk]",
"Строитель",	"Builder	['bɪldə]",
"Рабочий - строитель",	"Construction worker	[kən'strʌkʃ(ə)n 'wɜːkə]",
"Ремонтник",	"Repairer	[rɪ'peərə]",
"Сварщик",	"Welder	['weldə]",
"Каменщик",	"Bricklayer	['brɪkˌleɪə]",
"Плотник/столяр",	"Carpenter	['kɑːp(ə)ntə]",
"Водопроводчик",	"Plumber	['plʌmə]",
"Наука",	"Science	['saɪən(t)s]",
"Учёный",	"Scientist	['saɪəntɪst]",
"Исследователь, научный работник",	"Researcher, explorer	[rɪ'sɜːʧə], [ɪk'splɔːrə]",
"Математик",	"Mathematician	[ˌmæθ(ə)mə'tɪʃ(ə)n]",
"Физик",	"Physicist	['fɪzɪsɪst]",
"Астроном",	"Astronomer	[ə'strɔnəmə]",
"Археолог",	"Archaeologist	[ˌɑːkɪ'ɔləʤɪst]",
"Психоло",	"	Psychologist	[saɪ'kɔləʤɪst]",
"Закон и Порядок",	"Law and Order	[lɔː] & ['ɔːdə]",
"Судья",	"Judge	['ʤʌʤ]",
"Адвокат / юрист",	"Lawyer	['lɔɪə], ['lɔːjə] / [ə'təːnɪ]",
"Полицейский",	"Police officer, policeman	[pə'liːs 'ɔfɪsə], [pə'liːsmən]",
"Сотрудник дорожной полиции",	"Traffic officer	['træfɪk 'ɔfɪsə]",
"Другое",	"Other	['ʌðə]",
"Водитель",	"Driver	['draɪvə]",
"Пилот",	"Pilot	['paɪlət]",
"Программист",	"Computer programmer / operator	[kəm'pjuːtə 'prəugræmə] / ['ɔp(ə)reɪtə]",
"Специалист",	"Specialist	['speʃ(ə)lɪst]",
"Автомеханик",	"Car mechanic	[ka: mɪ'kænɪk]",
"Аналитик",	"Analyst	['æn(ə)lɪst]",
"Библиотекарь",	"Librarian	[laɪ'breərɪən]",
"Веб-мастер",	"	Webmaster	[web 'mɑːstə]",
"Веб-разработчик",	"Web developer	[web dɪ'veləpə]",
"Консультант",	"Consultant	[kən'sʌlt(ə)nt]",
"Модель",	"Model	['mɔd(ə)l]",
"Парикмахер",	"Hairdresser	['heəˌdresə]",
"Парикмахер (мужской)",	"Barber	['bɑːbə]",
"Пожарный",	"Fire-fighter	['faɪəˌfaɪtə]",
"Политик",	"Politician	[ˌpɔlɪ'tɪʃ(ə)n]",
"Портной",	"Tailor	['teɪlə]",
"Священник",	"Priest	[priːst]",
"Специалист программного обеспечения",	"Software specialist	['sɔftweə 'speʃ(ə)lɪst]",
"Уборщик, Дворник",	" 	Janitor	['ʤænɪtə]",
"Уборщица",	"Cleaning lady / woman	['kliːnɪŋ 'leɪdɪ]/ ['wumən]",
"Фермер",	"Farmer	['fɑːmə]",
"Эксперт, мастер",	"Expert	['ekspɜːt]",
]

let count = 0


// ---Перебираем Категории и "слушаем" какую выбрано (на какой произошло событие). Когда определяем, тогда добавляем новый класс
// --- Счетчик ставим на 0 для того, чтобы при выборе новой категории слова начинались с первого слова в базе выбранной  категории
activeLi.map(function(elem) {
  elem.onclick = function(){
    category.map(function(elem2){
    elem2.classList.remove("current")
    })
    elem.classList.add("current")
    count = 0
    outputWindow.innerHTML ='' // очищаем окно вывода после каждого переключения категории
  }
  }
)

// --- При нажатии на кнопку "вперед" определяем какая категория активна (активность мы определии выше) и в зависимости от категории подставляем слова
btnNext.addEventListener("click", () => {
  activeLi.map(function(elem){
        if(count ==20 || count == 40 || count ==60 || count ==80 || count == 100 || count == 120 || count == 140 || count == 160 || count == 180 || count == 200 || count == 220 || count == 240){outputWindow.innerHTML ='' }// Делаем проверку. Если окно вывода слов, которые были уже открыты, набрало 10 карточек (с двух сторон получается 20), т.е индекс (count) равен 20, 40 ..., тогда мы его отчищаем
         if(elem.classList.contains('personal') && elem.classList.contains('current')){
            if (count < personal.length) {
            word.innerHTML = personal[count];
            outputWindow.innerHTML += personal[count] + '<br>';
        count++}}
        if(elem.classList.contains('character') && elem.classList.contains('current')){
            if (count < character.length) {
            word.innerHTML = character[count];
            outputWindow.innerHTML += character[count] + '<br>';
        count++}}
        if(elem.classList.contains('profession') && elem.classList.contains('current')){
            if (count < profession.length) {
              word.innerHTML = profession[count];
              outputWindow.innerHTML += profession[count] + '<br>';
        count++}}
    })
})


// btnPrew.onclick = function (){ 
//    word.innerHTML = personal[count];
//     count--
// }
btnPrew.onclick = function (){ 
  activeLi.map(function(elem){
    if(count ==20 || count == 40 || count ==60 || count ==80 || count == 100 || count == 120 || count == 140 || count == 160 || count == 180 || count == 200 || count == 220 || count == 240){outputWindow.innerHTML ='' }// Делаем проверку. Если окно вывода слов, которые были уже открыты, набрало 10 карточек (с двух сторон получается 20), т.е индекс (count) равен 20, 40 ..., тогда мы его отчищаем
     if(elem.classList.contains('personal') && elem.classList.contains('current')){
        word.innerHTML = personal[count-1];
        outputWindow.innerHTML += personal[count] + '<br>';
        count--
         }
    if(elem.classList.contains('character') && elem.classList.contains('current')){
        word.innerHTML = character[count-1];
        outputWindow.innerHTML += character[count] + '<br>';
    count--}
    if(elem.classList.contains('profession') && elem.classList.contains('current')){
        
          word.innerHTML = profession[count-1];
          outputWindow.innerHTML += profession[count] + '<br>';
    count--}
})
}





// Включаем и выключаем окно в котором отображаются карточки, которые были уже открыты
onOff.onclick = function (){
  outputWindow.classList.toggle('hidden')
}




//Это к программе не относится 
// const a = [["Управление",	"Management	['mænɪʤmənt]"],[ "Президент", "President	['prezɪd(ə)nt]"]]

// console.log (a)



// // Object.fromEntries(a);
// console.log(Object.fromEntries(a))


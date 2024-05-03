import Dnipro from "../models/feeds/regionDnipro/dnipro.js";
import Kamianske from "../models/feeds/regionDnipro/kamianske.js";
import KryvyiRih from "../models/feeds/regionDnipro/kryvyi-rih.js";
import Marganets from "../models/feeds/regionDnipro/marganets.js";
import Nikopol from "../models/feeds/regionDnipro/nikopol.js";
import Novomoskovsk from "../models/feeds/regionDnipro/novomoskovsk.js";
import Pavlograd from "../models/feeds/regionDnipro/pavlograd.js";
import Pershotravensk from "../models/feeds/regionDnipro/pershotravensk.js";
import Pokrov from "../models/feeds/regionDnipro/pokrov.js";
import Pyatihatky from "../models/feeds/regionDnipro/pyatihatky.js";
import Sinelnikovo from "../models/feeds/regionDnipro/sinelnikovo.js";
import Ternivka from "../models/feeds/regionDnipro/ternivka.js";
import Vilnohorsk from "../models/feeds/regionDnipro/vilnohorsk.js";
import ZhovtiVody from "../models/feeds/regionDnipro/zhovti-vody.js";
import {
  Berezan,
  Bilacerkva,
  Boryspil,
  Boyarka,
  Brovary,
  Bucha,
  Fastiv,
  Irpin,
  Kyiv,
  Obukhiv,
  Pereyaslav,
  Skvyra,
  Slavutych,
  Vasylkiv,
  Vyshhorod,
  Vyshneve,
  Yagotyn,
} from "../models/feeds/regionKyiv/kyivCities.js";
import {
  BilgorodDnistrovsky,
  Chornomorsk,
  Izmail,
  Kiliya,
  Odesa,
  Podilsk,
  Teplodar,
  Youzhne,
} from "../models/feeds/regionOdesa/odesaCities.js";
import NationalNews from "../models/nationalNews.js";

const models = {
  "Загальнонаціональна стрічка": NationalNews,
  // Kyiv region
  Березань: Berezan,
  "Біла Церква": Bilacerkva,
  Бориспіль: Boryspil,
  Боярка: Boyarka,
  Бровари: Brovary,
  Буча: Bucha,
  Фастів: Fastiv,
  Ірпінь: Irpin,
  Київ: Kyiv,
  Обухів: Obukhiv,
  Переяслав: Pereyaslav,
  Сквира: Skvyra,
  Славутич: Slavutych,
  Васильків: Vasylkiv,
  Вишгород: Vyshhorod,
  Вишневе: Vyshneve,
  Яготин: Yagotyn,
  // Odesa region
  "Білгород-Дністровський": BilgorodDnistrovsky,
  Чорноморськ: Chornomorsk,
  Ізмаїл: Izmail,
  Кілія: Kiliya,
  Одеса: Odesa,
  Подільськ: Podilsk,
  Теплодар: Teplodar,
  Южне: Youzhne,
  // Dnipro region
  Дніпро: Dnipro,
  "Кривий Ріг": KryvyiRih,
  "Кам'янське": Kamianske,
  Нікополь: Nikopol,
  Павлоград: Pavlograd,
  Новомосковськ: Novomoskovsk,
  "Жовті Води": ZhovtiVody,
  Марганець: Marganets,
  Покров: Pokrov,
  Синельникове: Sinelnikovo,
  Тернівка: Ternivka,
  Першотравенськ: Pershotravensk,
  Вільногірськ: Vilnohorsk,
  "П'ятихатки": Pyatihatky,
};

export default models;

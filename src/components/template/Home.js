import React, {useState} from 'react';
import Template from "./Template";
import * as langIndex from "../../lang";

const Home = () => {

    const [lang, setLang] = useState({get: (key) => key});
    const [lang_ok, setLangOk] = useState(false);

    const consultaLang = () => {
        langIndex.cargarLang((result) => {
            setLang(langIndex);
            setLangOk(true);
        });
    };

    if (!lang_ok) {
        consultaLang();
    }

    return (
        <Template lang={lang} lang_ok={lang_ok}>
            <div className="text-center">
                <h1>Te amo</h1>
                <h3>
                    Sistema para la mejor nutriologa del mundo

                </h3>
            </div>
        </Template>
    );
};

export default Home;

import { createContext, FC, useState } from "react";


interface IKliqrContext {
    selectedId: string | number;
    setSelectedId: (id: string | number) => void;
}

const KliqrContext = createContext<Partial<IKliqrContext>>({});

const KliqrProvider: FC = (props) => {

    const [selectedId, setSelectedId] = useState<string | number>(0);

    return <KliqrContext.Provider value={{selectedId, setSelectedId}}>{props.children}</KliqrContext.Provider>
}

export {KliqrContext, KliqrProvider};
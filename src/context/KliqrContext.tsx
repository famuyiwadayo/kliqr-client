import { createContext, FC, useState } from "react";

interface IKliqrContext {
  selectedId: string | number;
  detailLoading: boolean;
  setSelectedId: (id: string | number) => void;
  setDetailLoading: (val: boolean) => void;
}

const KliqrContext = createContext<IKliqrContext>({} as any);

const KliqrProvider: FC = (props) => {
  const [selectedId, setSelectedId] = useState<string | number>(0);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);

  return (
    <KliqrContext.Provider
      value={{ selectedId, setSelectedId, detailLoading, setDetailLoading }}
    >
      {props.children}
    </KliqrContext.Provider>
  );
};

export { KliqrContext, KliqrProvider };

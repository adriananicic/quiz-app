import { FC, ReactNode, createContext, useContext, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface IDialogContext {
  element: ReactNode | null;
  setModal: (element: ReactNode | null) => void;
}

const DialogContext = createContext<IDialogContext>({
  element: null,
  setModal: (element) => {},
});

const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [element, setElement] = useState<ReactNode | null>(null);

  return (
    <DialogContext.Provider
      value={{
        element: element,
        setModal: (element) => {
          setElement(element);
          if (element) {
            document.body.classList.add("overflow-y-hidden");
          } else {
            document.body.classList.remove("overflow-y-hidden");
          }
        },
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const Dialog = () => {
  const { element, setModal } = useDialog();

  if (typeof document !== "undefined")
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setModal(null);
      }
    });

  if (!element) return null;

  return (
    <div className="w-full z-10 h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="w-[80%] h-[80%] rounded-lg bg-neutral-weak z-10  ">
        <div className="w-full flex justify-end">
          <IoCloseCircle
            size={25}
            color="gray"
            onClick={() => setModal(null)}
            className="fixed m-3 cursor-pointer"
          />
        </div>
        <div className="w-full h-full px-5  overflow-auto">{element}</div>
      </div>
      <div
        onClick={() => setModal(null)}
        className="fixed cursor-pointer top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      />
    </div>
  );
};

const useDialog = () => useContext(DialogContext);
export default useDialog;
export { DialogProvider };



export type sectionHeaderProps = {
  hightText: string;
  secondHightText?: string;
};

export type modalServivesProps = {
  serviceName: string;
  setServiceName: React.Dispatch<React.SetStateAction<string>>;
};

export type imgModalProps = {
  id: number;
  setModalState: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      id: number;
    }>
  >;
};

export type imgProps = {
  src: string;
};

export type HeaderButtonProps = {
  variant: string;
  onClick: () => void;
  children: React.ReactNode;
};

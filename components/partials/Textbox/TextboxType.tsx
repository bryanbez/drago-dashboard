export interface TextboxType {
  placeholder: string;
  value?: string;
  type: string;
  onChangeText?: () => void;
  className?: string;
}

// message interface
export interface IMessage {
  action: string;
  content: string;
}

// sender interface
export interface ISender {
  tab?: chrome.tabs.Tab;
  id: string | any;
}

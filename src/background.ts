import axios from "axios";
import { accessToken } from "./utils/env";
import { IMessage, ISender } from "./utils/interface";
import { TSendResponse } from "./utils/type";

// when extension is loaded or installed
const whenInstalled = () => {
  console.log("installed");
};

// get notification from likedin api
const getNotification = async (accessToken: string) => {
  const response = await axios.get(
    "https://api.linkedin.com/v2/me/notifications",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  console.log(response);
};

// notification message handler
const notificationMessageHandler = (
  message: IMessage,
  sender: ISender | any,
  sendResponse: TSendResponse
) => {
  if (message.action === "fetchNotifications") {
    // get notification from api
    getNotification(accessToken)
      .then((notification: any) => {
        console.log(notification);
      })
      .catch((error) => console.log(error));
    // const notificationOptions: chrome.notifications.NotificationOptions = {
    //   type: "basic",
    //   iconUrl: "/icon.png",
    //   title: "New Message",
    //   message: message.content,
    // };
    // chrome.notifications.create(notificationOptions as any);
  }
};
chrome.runtime.onMessage.addListener(notificationMessageHandler);
chrome.runtime.onInstalled.addListener(whenInstalled);

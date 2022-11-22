(ns cljs-app.components.thanks
  (:require 
   [cljs-app.state :as state]))

(defn thanks
  []
  [:div 
   {:class-name "bg-gray-800 text-white font-bold rounded-lg space-y-12
                       flex flex-col border shadow-lg p-10 text-center pb-36"}
   [:h2 {:class-name "text-2xl"} "Thank you!"]
   [:h3  {:class-name "text-5xl"} "😄" ]
   [:p (str "Your email \"" (last @state/emails) "\" has now been registered")]
   [:div {:class-name "space-y-6"}
    [:button  {:on-click (fn [] (reset! state/submitted false))
               :class-name "px-4 py-2 text-xl font-medium text-center 
                         text-white bg-orange-600 border border-transparent
                         rounded-full shadow-sm hover:bg-orange-700 focus:bg-orange-700
                         focus:outline-none mt-5"}
     "back"]
    [:h2 {:class-name "text-2xl"}
     "Registered so far:"]
    (for [e @state/emails]
      [:p e])
    ]])

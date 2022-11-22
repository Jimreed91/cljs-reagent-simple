(ns cljs-app.components.form
  (:require 
   [reagent.core :as r]
   [cljs-app.state :as state]))

(defn form []
  [:div {:class-name "bg-gray-800 text-white font-bold rounded-lg
                       flex flex-col border shadow-lg p-24 "}
   [:h1 "Enter your email"]
  [:form {:class-name " flex flex-col items-center space-y-10"
          :on-submit (fn [e]
                       (do (.preventDefault e)
                           (reset! state/emails (conj @state/emails @state/email))
                           (reset! state/submitted true)))}
   [:input {:type :text :name :email 
            :class-name "w-full outline-none focus:outline-black
                         focus:shadow-none focus:ring-0 text-black p-2
                         text-3xl rounded text-center"
            :value @state/email
            :placeholder "email"
            :on-change (fn [e]
                         (reset! state/email (-> e .-target .-value)))}]
   [:input {:type "submit"
            :value "submit" 
            :class-name "px-4 py-2 text-xl font-medium text-center 
                         text-white bg-orange-600 border border-transparent
                         rounded-full shadow-sm hover:bg-orange-700 focus:bg-orange-700
                         focus:outline-none mt-5 "}]]])
;
@state/emails

;  (assoc-in {} [@state/emails :email] "val")

  ;;  [:label "Email"
  ;;   [:input
  ;;    {:name "email"
  ;;     :value @state/email
  ;;     :on-change #(reset! state/email (.-value (.-target %)))}]]
  ;;  [:label "Phone"
  ;;   [:input
  ;;    {:name "phone"
  ;;     :type "text"}]]
  ;;  [:input {:type "submit"}]))])

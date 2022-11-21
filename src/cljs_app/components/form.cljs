(ns cljs-app.components.form
  (:require 
   [reagent.core :as r]
   [cljs-app.state :as state]))

(defn form []
      [:form {:on-submit (fn [e]
                           (do (.preventDefault e)
                           (swap! state/emails conj state/email)
                           (reset! state/submitted true)))}
       [:input {:type :text :name :email 
                :value @state/email
                :on-change (fn [e]
                             (reset! state/email (-> e .-target .-value)))}]
       [:input {:type "submit"
                 :value "submit"}]])
  
;;  (assoc-in {} [@state/emails :email] "val")

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

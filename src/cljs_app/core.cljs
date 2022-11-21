(ns cljs-app.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [cljs-app.components.form :refer [form]]
   [cljs-app.state :as state]))

;; -------------------------
;; Views

(defn home-page
  []
 (if (= @state/submitted false)
   [:div
     [:h2 "Please register below"]
     [form]
     [:p @state/email]]
   [:div
     [:h2 "Thank you!"]]) 
  
)
(= @state/submitted false)
;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))

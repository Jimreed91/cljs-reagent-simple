(ns cljs-app.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [cljs-app.components.form :refer [form]]
   [cljs-app.state :as state]
   [cljs-app.components.thanks :refer [thanks]]
   [cljs-app.components.header :refer [header]]))

;; -------------------------
;; Views

(defn home-page
  [] 
 (if (= @state/submitted false)
   [:div
    [header]
    [:div {:class-name ""}
     [form]]]
   [:div
    [header]
    [:div {:class-name ""}
     [thanks]]]) 
  
)

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app"))
)
(defn ^:export init! []
  (mount-root))

(ns cljs-app.state
  (:require [reagent.core :as r]))
(def email (r/atom ""))

(def emails (r/atom []))

(def submitted (r/atom false))

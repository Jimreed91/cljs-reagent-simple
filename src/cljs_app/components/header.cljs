(ns cljs-app.components.header)

(defn header
  []
  [:div {:class-name "flex justify-center mb-16"}
   [:h1 {:class-name "font-mono text-6xl grid pt-20"}
    "My cljs taster app :)"]])

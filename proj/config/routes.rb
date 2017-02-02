Rails.application.routes.draw do
  root 'links#index'



  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }, skip: [:sessions]
  	as :user do
  		get 'login' => 'devise/sessions#new', as: :new_user_session
  		post 'login' => 'devise/sessions#create', as: :user_session
  		delete 'logout' => 'devise/sessions#destroy', as: :destroy_user_session
  	end
    #devise_for :users,

  resources :comments

  resources :users, only: [:show] do
    resources :links, except: [:index, :show]
  end
  
  resources :links, only: [:index, :show] do
    member do
      put "like",    to: "links#upvote"
      put "dislike", to: "links#downvote"
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

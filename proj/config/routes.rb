Rails.application.routes.draw do
  root 'welcome#main'
  
  resources :links do 
    resources :comments
  end




  devise_for :users, skip: [:sessions]
  	as :user do 
  		get 'login' => 'devise/sessions#new', as: :new_user_session
  		post 'login' => 'devise/sessions#create', as: :user_session
  		delete 'logout' => 'devise/sessions#destroy', as: :destroy_user_session
  	end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

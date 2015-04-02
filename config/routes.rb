NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
  end

  resources :users, only: [:new, :create, :show]
  resource :sessions, only: [:new, :create, :destroy]

  root to: "static_pages#index"
end

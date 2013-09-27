Phototagger::Application.routes.draw do

  resource :session, :only => [:create, :destroy, :new]

  resources :users, :only => [:create, :new, :show]

  namespace "api", defaults: {format: :json} do
    resources :users, only: [:show] do
      resources :photos, only: [:index]
    end

    resources :photos, only: [:create, :show] do
      resources :photo_taggings, only: [:index]
    end

    resources :photo_taggings, only: [:create]
  end

  root :to => "static_pages#root"
end

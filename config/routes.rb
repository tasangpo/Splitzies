Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
    resources :expenses, only: [:index, :show, :create, :update, :destroy]
    resources :expense_splits, only: [:create, :destroy]
    resources :groups, only: [:index, :show, :create, :update, :destroy]
    resources :group_members, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end

  root "static_pages#root"
end

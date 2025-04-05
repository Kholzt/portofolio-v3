<?php

namespace App\Filament\Resources\PortofolioResource\Pages;

use App\Filament\Resources\PortofolioResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Resources\Components\Tab;
use Illuminate\Database\Eloquent\Builder;
class ListPortofolios extends ListRecords
{
    protected static string $resource = PortofolioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()->label("Tambah Portofolio"),
        ];
    }

    public function getTabs(): array
{
    return [
        'all' => Tab::make(),
        'Experience' => Tab::make()
            ->modifyQueryUsing(fn (Builder $query) => $query->where('type', "experience")),
        'Project' => Tab::make()
            ->modifyQueryUsing(fn (Builder $query) => $query->where('type', "project")),
    ];
}
}
